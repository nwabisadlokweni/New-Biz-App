import { useState, useContext } from "react";
import validator from "validator";
import { context as authContext } from "../../../hooks/useAuth";
import { useHistory } from "react-router-dom";

export const useSyncEmail = () => {
  const history = useHistory(); 
  const { changeToOnlineAccount } = useContext(authContext)
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alert, setAlert] = useState(null);

  const createAccount = async () => {
    if (!email || email.length < 1) return setAlert("noEmail");
    if (!password || password.length < 1) return setAlert("noPassword");
    if (!confirmPassword || confirmPassword.length < 1)
      return setAlert("noConfirmPassword");

    if (!validator.isEmail(email)) return setAlert("formatEmail");
    if (password.length < 8) return setAlert("shortPassword");
    if (confirmPassword.length < 8) return setAlert("shortConfirmPassword");

    if (password !== confirmPassword) return setAlert("misMatchPassword");
    setAlert("creating");

    const [success, code] = await changeToOnlineAccount(email, password)
     
      if (!success) {
        return setAlert(code)
      }
      history.push('/check/sync')
  };

  return {
    email,
    password,
    confirmPassword,
    setEmail,
    setPassword,
    setConfirmPassword,
    createAccount,
    alert,
  };
};

export default useSyncEmail;
