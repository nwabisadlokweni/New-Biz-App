import { useState } from "react";
import validator from "validator";

export const useSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(null);
  
  const signIn = () => {
    if (!email || email.length < 1) return "noEmail";
    if (!password || password.length < 1) return "noPassword";

    if (!validator.isEmail(email)) return setAlert("formatEmail");
    if (password.length < 8) return setAlert("shortPassword");
  
    setAlert('checking');
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    signIn,
    alert,
  };
};

export default useSignIn;
