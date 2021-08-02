import React, { useState } from "react";
import { users } from "../../api/users";
import { useItemsList } from "./ItemsList.useItemsList";

export const ItemsList = () => {
  const { current, signOff } = useItemsList();

  return (
    <div>
      <div>Logged In: {JSON.stringify(current)}</div>
      <button onClick={signOff}>
        LOG OUT
      </button>
    </div>
  );
};

export default ItemsList;
