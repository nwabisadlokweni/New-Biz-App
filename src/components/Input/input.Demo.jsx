import React from "react"
import { Input } from "./Input"

export const Demo = () => {
    return <div>
        <Input accepts="text" label="Text" />
        <Input accepts="email" label="Email" />
        <Input accepts="password" label="Password" />
        </div>
}

export default Demo