import React from "react";
import styled from "styled-components";
import useCreatePassword from "./CreatePassword.useCreatePassword";

import { ALERTS } from "./CreatePassword.constants"
import { Layout } from "../../../components/Layout";
import { Input } from "../../../components/Input";
import { Text } from "../../../components/Text";
import { tokens } from "../../../data/tokens";

const InputWrap = styled.div`
  padding: ${tokens.spacing.l};
`;

export const CreatePassword = () => {
    const { password, setPassword, alert} = useCreatePassword();
    
    return (
        <Layout
          title="New Account"
          primary={["Continue", '/create/photo']}
          secondary={["Cancel", "/"]}
          alert={ALERTS[alert]}
        >
          <Text size="s">Provide a password to be associated with this account</Text>
          <InputWrap>
            <Input
              accepts="password"
              label="Your password"
              value={password}
              onChange={setPassword}
            />
          </InputWrap>
        </Layout>
      );
}

export default CreatePassword