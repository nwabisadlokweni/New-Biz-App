import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export const useAddShoot = () => {
    const history = useHistory();
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [date, setDate] = useState('')
    const [alert, setAlert] = useState(null)

    const save = () => {
        if(!name || name.trim() === '') return setAlert('noName')
        setAlert('saving')

        if(!type || type.trim() === '') return setAlert('noType')
        setAlert('saving')

        if(!date || date.trim() === '') return setAlert('noDate')
        setAlert('saving')
        history.push('/shoots/displayshoots')
    }
    return {
        setName,
        name,
        type,
        setType,
        date,
        setDate,
        alert,
        save,
    }
}

export default useAddShoot;