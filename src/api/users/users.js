import GoTrue from "gotrue-js";
import { openDB } from "idb";
import { v4 as createId } from "uuid";
import "../../types/User";

const auth = new GoTrue({
  APIUrl: "https://our-biz-app.netlify.app/.netlify/identity",
  audience: "",
  setCookie: false,
});

const createUsersApi = () => {
  const dbRequest = openDB("users", 1, {
    upgrade: (innerDb) => {
      innerDb.createObjectStore("data", { keyPath: "id" });
      innerDb.createObjectStore("meta", { keyPath: "id" });
    },
  });

  /**
   * @param {string} email
   * @param {string} password
   * @returns {Promise<[boolean, { id: string } | 'noAccount' | 'technical']>}
   */
  const signInOnline = async (email, password) => {
    try {
      const db = await dbRequest;
      const { id, token } = await auth.login(email, password);

      await db.put("meta", { id: "current", value: id });
      await db.put("meta", { id: "accessToken", value: token.access_token });
    
      return [true, { id }];
    } catch (error) {
      const errorAsString = error.toString();

      if (
        errorAsString ===
        "JSONHTTPError: invalid_grant: No user found with that email, or password invalid."
      ) {
        return [false, "noAccount"];
      }
      if (
        errorAsString === "JSONHTTPError: invalid_grant: Email not cornfirmed"
      ) {
        return [false, "notVerified"];
      }
      return [false, "technical"];
    }
  };

  /**
   * @param {string} token
   * @returns {Promise<[boolean, {id: string } | 'technical']>}
   */
  const signInOnlineWithToken = async (token) => {
    try {
      const db = await dbRequest;
      const { id } = await auth.confirm(token);

      await db.put("meta", { id: "current", value: id });

      return [true, { id }];
    } catch (error) {
      return [false, "technical"];
    }
  };

  /**
   * @param {string} token
   * @returns {Promise<[boolean, {id: string } | 'technical']>}
   */
  const signInOnlineWithRecovery = async (token) => {
    try {
      const db = await dbRequest;
      const { id } = await auth.recoverToken(token);

      await db.put("meta", { id: "current", value: id });

      return [true, { id }];
    } catch (error) {
      return [false, "technical"];
    }
  };

  /**
   * @param {string} name
   * @param {Blob} image
   */
  const createLocalAccount = async (name, image) => {
    const db = await dbRequest;
    const id = createId();

    const newAccount = {
      id,
      name,
      image,
      activity: new Date(),
      type: "local",
    };
    await db.put("data", newAccount);
    await db.put("meta", { id: "current", value: id });

    return [true, newAccount];
  };

  /**
   * @param {string} email
   * @param {string} password
   * @returns {Promise<[boolean, { id: string } | 'emailAreadyUsed' | 'technical']>}
   */
  const changeToOnlineAccount = async ( email, password) => {
    try {
      const db = await dbRequest;
      const { id } = await getCurrent();
      const { id: netlifyId } = await auth.signup(email, password);

      await db.put("data", { id, netlifyId, email, type: "online" });

      await signInOnline(email, password);
      return [true, null];
    } catch (error) {
      const errorAsString = error.toString();
      if (
        errorAsString ===
        "JSONHTTPError: A user with this email address has already been registered"
      ) {
        return [false, "emailAreadyUsed"];
      }
      return [false, "technical"];
    }
  };

  /**
   * @param {string} token
   * @returns {Promise<[boolean, null | 'technical']>}
   */
  const signInWithToken = async (token) => {
    try {
      const db = await dbRequest;
      const { id } = await auth.confirm(token);

      await db.put("meta", { id: "current", value: id });

      return [true, null];
    } catch (error) {
      return [false, "technical"];
    }
  };

  const signInWithRecovery = async (token) => {
    try {
      const db = await dbRequest;
      const { id } = await auth.recoverToken(token);

      await db.put("meta", { id: "current", value: id });

      return [true, { id }];
    } catch (error) {
      return [false, "technical"];
    }
  };

  /**
   * @returns {Promise<null | User>}
   */
  const getCurrent = async () => {
    const db = await dbRequest;

    const current = await db.get("meta", "current");
    if (!current || !current.value) return null;

    const response = await db.get("data", current.value);
    return response;
  };

  /**
   * @returns {Promise<User[]>}
   */
  const getUsers = async () => {
    const db = await dbRequest;
    return await db.getAll("data");
  };

  /**
   * @param {string} id
   * @returns {[boolean]}
   */
  const resetOnlinePassword = async (email) => {
    await auth.requestPasswordRecovery(email);
    return [true];
  };

  /**
   * @param {string} email
   * @returns {Promise<[boolean, null | 'technical']>}
   */
  const signInLocal = async (id) => {
    try {
      const db = await dbRequest;
      await db.put("meta", { id: "current", value: id });

      const currentUser = await users.getCurrent();
      return [true, currentUser];
    } catch (error) {
      return [false, "technical"];
    }
  };

  /**
   * @returns {Promise<[boolean, null | 'technical']>}
   */
  const signOut = async () => {
    try {
      const db = await dbRequest;
      await db.put("meta", { id: "current", value: null });
      return [true, null];
    } catch (error) {
      return [false, "technical"];
    }
  };

  return {
    getCurrent,
    getUsers,
    changeToOnlineAccount,
    createLocalAccount,
    signInOnline,
    signInLocal,
    signInOnlineWithToken,
    signOut,
    resetOnlinePassword,
    signInOnlineWithRecovery,
  };
};

export const users = createUsersApi();
export default users;
