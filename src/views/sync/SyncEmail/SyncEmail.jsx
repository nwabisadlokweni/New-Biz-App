import React from "react";
import styled from "styled-components";
import { Layout } from "../../../components/Layout";
import { Input } from "../../../components/Input";
import { tokens } from "../../../data/tokens";
import { useSyncEmail } from "./SyncEmail.useSyncEmail";
import { ALERTS } from "./SyncEmail.constants";
// import Alert from "../../components/Alert";

const InputWrapper = styled.div`
  padding: ${tokens.spacing.s} 0;
`;

export const SyncEmail = () => {
  const {
    email,
    password,
    confirmPassword,
    setEmail,
    setPassword,
    setConfirmPassword,
    createAccount,
    alert,
  } = useSyncEmail();

 const isResting = alert !== 'creating';

  return (
    <Layout
    form
      title="Online Details"
      alert={alert ? ALERTS[alert] : undefined}
      secondary={["Cancel", isResting && "/"]}
      primary={["Sync Account", isResting && createAccount]}
    >
      <InputWrapper>
        <Input
          value={email}
          label="Email"
          accepts="email"
          onChange={isResting && setEmail}
        />
      </InputWrapper>

      <InputWrapper>
        <Input
          value={password}
          label="Password"
          accepts="password"
          onChange={isResting && setPassword}
        />
      </InputWrapper>

      <InputWrapper>
        <Input
          value={confirmPassword}
          label="Confirm Password"
          accepts="password"
          onChange={isResting && setConfirmPassword}
        />
      </InputWrapper>
 </Layout>
  );
};
export default SyncEmail;
