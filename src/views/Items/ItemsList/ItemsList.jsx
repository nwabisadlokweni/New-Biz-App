import React from "react";
import styled from "styled-components";
import { Input } from "../../../components/Input";
import { format as formatDate } from "date-fns";
import { useItemsList } from "./ItemsList.useItemsList";
import { Layout } from "../../../components/Layout";
import { ItemPreview } from "../../../components/ItemPreview";
import { tokens } from "../../../data/tokens";

const InputWrapper = styled.div`
  padding: ${tokens.spacing.s}0;
`;

export const ItemsList = () => {
  const { list, date, surname, name, location, priceInCents, update, submit } =
    useItemsList();

  return (
    <Layout tittle="Shoots">
      {/* {user.image && (
        <img width="100" src={URL.createObjectURL(user.image)} alt="" />
      )}
      <div>Logged In: {user ? JSON.stringify(user) : "NO USER"}</div>
      <button onClick={signOut}>LOG OUT</button> */}

      {list.map(({ date, priceInCents, location, surname, id, name }) => (
        <ItemPreview
          key={id}
          tittle={`${name} ${surname}`}
          action="#"
          helper={date ? formatDate(date, "d MM yyyy") : "No Date"}
        />
      ))}

      <Layout
        overlay
        title="Hello"
        form
        padded
        primary={["Add Shoot", "#"]}
        secondary={["Cancel", "#"]}
      >
        <InputWrapper>
          <Input label="Name" value={name} onChange={update("name")} />
        </InputWrapper>

        <InputWrapper>
          <Input label="Surname" value={surname} onChange={update("surname")} />
        </InputWrapper>

        <InputWrapper>
          <Input
            accepts="datetime"
            label="Date"
            value={date}
            onChange={update("date")}
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            label="Location"
            value={location}
            onChange={update("location")}
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            label="Price"
            value={priceInCents}
            onChange={update("priceInCents")}
          />
        </InputWrapper>
      </Layout>
    </Layout>
  );
};

export default ItemsList;
