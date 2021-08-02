import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { users } from "../../api/users";

export const useApp = () => {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    const determineLoggedIn = async () => {
      const hasAuthToken = await checkIfAuthToken();
      if (hasAuthToken) return setLoggedIn(true);

      users.getCurrent().then((response) => {
        if (!response) return setLoggedIn(false);

        setLoggedIn(true);
        history.push("/items/list");
      });
    };
    determineLoggedIn();
  }, [history]);

  return {
    checking: loggedIn === null,
    loggedIn,
  };
};

export default useApp;
