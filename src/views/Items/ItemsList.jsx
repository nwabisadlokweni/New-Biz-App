import React from "react";
import { useItemsList } from "./ItemsList.useItemsList";

export const ItemsList = () => {
  const { user, signOut } = useItemsList();

  return (
    <div>
      {user.image && (
        <img width="100" src={URL.createObjectURL(user.image)} alt="" />
      )}
      <div>Logged In: {user ? JSON.stringify(user) : "NO USER"}</div>
      <button onClick={signOut}>LOG OUT</button>
    </div>
  );
};

export default ItemsList;
