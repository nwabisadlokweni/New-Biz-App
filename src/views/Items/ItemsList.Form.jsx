import React, { useState } from 'react'
import '../../../types/Shoot'

export const Form = () => {
/**
 * @returns {Omit<Shoot, 'id'>}
 */

const useForm = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [date, setDate] = useState('')
    const [location, setLocation] = useState('')
    const [priceInCents, setPriceInCents] = useState('')

    /**
     * @type {Record<Exclude<shootKey, 'id'>, (newValue: any) => void}
     */
const updateFns ={
    date: setDate,
    location: setLocation,
    name: setName,
    priceInCents: setPriceInCents,
    surname: setSurname,
}

/**
 *  @param {shootKey} key 
 */
const update = (key) => {

}

return {
    date,
    update,
    
}
}
}

export default Form