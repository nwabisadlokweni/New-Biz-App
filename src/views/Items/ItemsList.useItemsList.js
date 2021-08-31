import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { users } from '../../api/users';

export const useItemsList = () => {
    const [current, setCurrent] = useState('')

    useEffect(() => {
        users.getCurrent().then((response) => {
            if (!response) return history.push('/')
            setCurrent(response)
        })
    })
const signOut = async () => {
    users.signOut();
}

return {
    current,
    signOut,

}
}