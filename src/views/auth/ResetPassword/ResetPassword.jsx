import React from "react";
import { Layout } from "../../../components/Layout";
import { Input } from "../../../components/Input";
import { useResetPassword } from "./ResetPassword.useResetPassword";
import { ALERTS } from "./ResetPassword.constants";

export const ResetPassword = () => {
  const { alert, setEmail, email, send } = useResetPassword();
  return (
    <Layout
      form
      title="Reset Password"
      primary={["Send", send]}
      secondary={["cancel", "/auth/signIn"]}
      alert={alert ? ALERTS[alert] : undefined}
    >
      <Input label="Email" onChange={setEmail} value={email} />
    </Layout>
  );
};

export default ResetPassword;
