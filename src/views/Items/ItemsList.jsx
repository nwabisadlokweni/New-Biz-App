import React from "react";
import { Input } from '../../../components/Input'
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
    
    <form>
      <Input label="Name" onChange={} />
      <Input label="Name" onChange={} />
      <Input label="Name" onChange={} />
      <Input label="Name" onChange={} />
      <Input label="Name" onChange={} />
      <Input label="Name" onChange={} />
    </form>
    </div>
  );
};

export default ItemsList;
