import { useState } from "react";
import { useMount } from "react-use";
import { users } from '../../../api/users';

export const useUserSelect = () => {
    const [LocalUsers, setLocalUsers] = useState([])

    useMount(async () => {
        const response = await users.getUsers();
        setLocalUsers(response && response.length > 0)
    })

    return {
        setLocalUsers
    }
}

export default useUserSelect