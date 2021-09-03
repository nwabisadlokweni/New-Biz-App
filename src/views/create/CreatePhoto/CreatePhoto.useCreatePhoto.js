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
        history.push('/shoots/displayshoots')
    }

    const uploadImage = ([file]) => {
        const image = URL.createObjectURL(file)
        setImage(image)
        setPhase('display')
    }

    const edit = () => {
        setImage(null)
        setPhase('editing')}
    const cancel = () => setPhase('display')
    return {
        uploadImage,
        phase,
        image,
        alert,
        save,
        edit,
        cancel,
    }
}

export default useCreatePhoto;