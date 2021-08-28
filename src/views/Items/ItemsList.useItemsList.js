import { useContext, useState } from "react";
import { useMount } from "react-use";
import { context as authContext } from "../../../hooks/useAuth";
import { shoots } from "../../../api/shoots";

export const useItemsList = () => {
  const { user, signOut } = useContext(authContext);
  const [list, setList] = useState([]);

  useMount(async () => {
    const result = await shoots.search(() => true);
    console.log(result);

    shoots.add({
      date: new Date(),
      location: "Cape Town",
      name: "Nwabisa",
      suename: "Dlokweni",
      priceInCents: "3000",
    });
  });
  
  return {
    user,
    signOut,
  };
};
