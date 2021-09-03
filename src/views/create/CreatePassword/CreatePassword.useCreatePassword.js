import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export const useCreatePassword = () => {
    const history = useHistory();
    const [password, setPassword] = useState('')
    const [alert, setAlert] = useState(null)

    const save = () => {
        if(!password || password.trim() === '') return setAlert('noPassword')
        setAlert('saving')
        history.push('/create/photo')
    }
    return {
        setPassword,
        password,
        alert,
        save,
    }
}

export default useCreatePassword;