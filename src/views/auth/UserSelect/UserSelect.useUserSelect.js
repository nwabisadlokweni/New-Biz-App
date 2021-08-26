import { useState } from "react";
import { useMount } from "react-use";
import { users } from "../../../api/users";
import '../../../types/User'

export const useUserSelect = () => {
  /**
   * @typedef {[User[], (newUser: User[]) => void ]}
   */
  const [localUsers, setLocalUsers] = useState([]);

  useMount(async () => {
    const response = await users.getUsers();
    setLocalUsers(response);
  });
  return { localUsers };
};
export default useUserSelect;
