import { useState } from 'react'
import { useHistory } from 'react-router-dom'


/**
 * 
 * @typedef {'display' | 'editing'} phase
 */
export const useCreatePhoto = () => {
    const history = useHistory();

    /**
     * @type {[phase, (newPhase: phase) => void]}
     */
    const [phase, setPhase] = useState('empty');
    const [image, setImage] = useState(null)
    const [alert, setAlert] = useState(null)

    const save = () => {
        if(!image) return setAlert('noImage')
        setAlert('saving')
        history.push('/create/sync')
    }

    const uploadImage = ([file]) => {
        const imageUrl = URL.createObjectURL(file)
        setImage(imageUrl)
        setPhase('display')
    }

    const edit = () => setPhase('editing')
    const cancel = () => setPhase('display')
    return {
        uploadImage,
        phase,
        image,
        alert,
        save,
    }
}

export default useCreatePhoto;