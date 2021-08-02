import React from "react";
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
