import { useState, useContext } from "react";
import validator from "validator";
import { context as authContext } from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";

export const useNewAccount = () => {
  const history = useHistory(); 
  const { createAccount: authCreateAccount } = useContext(authContext)
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alert, setAlert] = useState(null);

  const createAccount = async () => {
    if (!email || email.length < 1) return "noEmail";
    if (!password || password.length < 1) return "noPassword";
    if (!confirmPassword || confirmPassword.length < 1)
      return "noConfirmPassword";

    if (!validator.isEmail(email)) return setAlert("formatEmail");
    if (password.length < 8) return setAlert("shortPassword");
    if (confirmPassword.length < 8) return setAlert("shortConfirmPassword");

    if (password !== confirmPassword) return setAlert("mismatchPassword");
    setAlert("creating");

    const [success, code] = await authCreateAccount(email, password)
     
      if (!success) {
        return setAlert(code)
      }
      history.push('/auth/sent')
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

export default useNewAccount;
