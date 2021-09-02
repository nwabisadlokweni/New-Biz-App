import React from "react";
import styled from "styled-components";

import useAddShoot from "../AddShoot/AddShoot.useAddShoot"
import { Layout } from "../../../components/Layout";
import { Input } from "../../../components/Input";
import { Text } from "../../../components/Text";
import { tokens } from "../../../data/tokens";

const InputWrap = styled.div`
  padding: ${tokens.spacing.l};
`;

export const AddShoot = () => {
  const { name, setName, type, setType, date, setDate, alert, save } = useAddShoot();

  return (
    <Layout
      title="Add Shoot"
      primary={["Add", save]}
      secondary={["Cancel", "/"]}
    //   alert={ALERTS[alert]}
    >
      <Text size="s">Provide details for the shoot</Text>
      <InputWrap>
        <Input
          accepts="text"
          label="Customer Name"
          value={name}
          onChange={setName}
        />
        <Input
          accepts="text"
          label="Type"
          value={type}
          onChange={setType}
        />

<Input
          accepts="date"
          label="Date"
          value={date}
          onChange={setDate}
        />
      </InputWrap>
    </Layout>
  );
};

export default AddShoot;