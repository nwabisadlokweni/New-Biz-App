import { useState } from "react";
import { useMount } from "react-use";
import { users } from '../../../api/users';

export const useLandingPage = () => {
    const [hasLocalUsers, setHasLocalUsers] = useState(null)

    useMount(async () => {
        const response = await users.getUsers();
        setHasLocalUsers(response && response.length > 0)
    })

    return {
        hasLocalUsers
    }
}

export default useLandingPage