import GoTrue from "gotrue-js";
// import { openDB } from "idb";
// import { v4 as createId } from "uuid";
import { createDbStore } from "../../utils/createDbStore";
import "../../type/User";

const auth = new GoTrue({
  APIUrl: "https://our-biz-app.netlify.app/.netlify/identity",
  audience: "",
  setCookie: false,
});

const db = createDbStore("users", ["activity"]);

const createUsers = () => {
  /**
   * @param {string} email
   * @param {string} password
   * @returns {Promise<[boolean, { id: string } | 'noAccount' | 'technical']>}
   */
  const signInOnline = async (email, password) => {
    try {
      const { id, token } = await auth.login(email, password);

      await db.setMeta("current", id);
      await db.setMeta("accessToken", token.access_token);
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
      const { id: netlifyId } = await auth.confirm(token);

      const result = db.search(
        (singleUser) => singleUser.netlifyId === netlifyId
      );

      const newUserData = {
        ...result,
        type: "online",
        netlifyId,
      };
      await db.update(newUserData);
      await db.setMeta("acccessToken", token.access_token);

      return [true, newUserData];
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
      const { id } = await auth.recoverToken(token);

      await db.setMeta("current", id);

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
    const id = db.generateId();

    const newAccount = {
      id,
      name,
      image,
      activity: new Date(),
      type: "local",
    };

    await db.add(newAccount);
    await db.setMeta("current", id);

    return [true, newAccount];
  };

  /**
   * @param {string} email
   * @param {string} password
   * @returns {Promise<[boolean, { id: string } | 'emailAreadyUsed' | 'technical']>}
   */
  const changeToOnlineAccount = async (email, password) => {
    try {
      const currentUser = await getCurrent();
      const { id: netlifyId } = await auth.signup(email, password);

      const newUserData = {
        ...currentUser,
        netlifyId,
        email,
        type: "verifying",
      };
      await db.update(newUserData);

      return [true, newUserData];
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
   * @returns {Promise<null | User>}
   */
  const getCurrent = async () => {
    const current = await db.getMeta("current");
    if (!current) return null;

    const response = await db.read(current);
    return response;
  };

  /**
   * @returns {Promise<User[]>}
   */
  const getUsers = async () => {
    return await db.search(true, { count: 20, sorting: "activity" });
  };

  /**
   * @param {string} email
   * @returns {[boolean]}
   */
  const resetOnlinePassword = async (email) => {
    await auth.requestPasswordRecovery(email);
    return [true];
  };

  /**
   * @param {string} id
   * @returns {Promise<[boolean, null | 'technical']>}
   */
  const signInLocal = async (id) => {
    try {
      await db.search("current", id);

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
      await db.setMeta("current", null);
      return [true, null];
    } catch (error) {
      return [false, "technical"];
    }
  };

  const cancelVerification = async () => {
    const user = await getCurrent();

    const response = await db.update({ ...user, type: "local" });
    return response;
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
    cancelVerification,
  };
};

export const users = createUsers();
export default users;