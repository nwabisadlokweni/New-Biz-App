import React from "react";
import styled from "styled-components";

import useCreateName from "./CreateName.useCreateName";
import { ALERTS } from "./CreateName.constants";
import { Layout } from "../../../components/Layout";
import { Input } from "../../../components/Input";
import { Text } from "../../../components/Text";
import { tokens } from "../../../data/tokens";

const InputWrap = styled.div`
  padding: ${tokens.spacing.l};
`;

export const CreateName = () => {
  const { name, setName, alert, save } = useCreateName();

  return (
    <Layout
      title="New Account"
      primary={["Continue", save]}
      secondary={["Cancel", "/"]}
      alert={ALERTS[alert]}
    >
      <Text size="s">Provide a name to be asociated with this account</Text>
      <InputWrap>
        <Input
          accepts="text"
          label="Your name"
          value={name}
          onChange={setName}
        />
      </InputWrap>
    </Layout>
  );
};

export default CreateName;