import React from "react"
import { Link } from "./Link"
import styled from "styled-components";
import tokens from "../../data/tokens";

const DarkBg = styled.div`
width: 100%;
background: rgb(${tokens.colors.turquoise})
`

export const Demo = () => {
    return <div>
        <Link action='#'>Hello world!</Link>
        <Link action={() => console.log("FIRED!")}>Hello world!</Link>

        <DarkBg>
        <Link action='#'>Hello world!</Link>
        <Link action={() => console.log("FIRED!")}>Hello world!</Link>
        </DarkBg>
    </div>
}

export default Demo