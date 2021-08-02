import React, { useState, createContext, Context } from "react";
import { users } from "../../api/users";
import { useMount } from "react-use";

const checkIfAuthToken = async () => {
  const { hash } = window.location;
  if (!hash || !hash.startsWith("#/confirmation_token")) return false;
  const tokenValue = hash.replace(/#\/confirmation_token=/, "");
  const response = await users.signInWithToken(tokenValue);
  return response;
};

 const useAuthInsideProvider = () => {
  const [user, setUser] = useState(null);

  useMount(async () => {
    const authResponse = await checkIfAuthToken();
    if (authResponse) return setUser(authResponse);

    const currentResponse = await users.getCurrent();
    if (currentResponse) return setUser(currentResponse);

    setUser(false);
  });

  const signIn = async (email, password) => {
    const [success, payload] = await users.signIn(email, password);

    if (success) {
      setUser(payload);
    }
    return [success, payload];
  };

  const createAccount = async (email, password) => {
    const [success, payload] = await users.createAccount(email, password);
    return [success, payload];
  };

  const signOut = async () => {
    const [success] = await users.signOut();
    if (success) {
      setUser(false);
    }
    return [success];
  };

  return {
    loading: user === null,
    user,
    signIn,
    createAccount,
    signOut,
  };
};

/**
 * @typedef {object} auth
 * @property {boolean} loading
 * @property {null | false | { id: string }} user
 * @property {{email: string, password: string} => Promise<boolean, any>} signIn
 * * @property {{email: string, password: string} => Promise<boolean, any>} createAccount
 * @property {() => Promise<boolean, any>} signOut
 */

/**
 * @type {Context<auth>}
 */

export const context = createContext();

export const Provider = (props) => {
  const { children } = props;
  const auth = useAuthInsideProvider();

  return <context.Provider value={auth}>{children}</context.Provider>;
};

export default context;
