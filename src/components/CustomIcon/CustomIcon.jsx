import React from "react";
import styled from 'styled-components'
import { SvgIcon } from "@material-ui/core";
import { tokens } from '../../data/tokens'

/**
 * @typedef {'noCloud' | 'activeCloud' | 'email'} image
 */

/**
 * @typedef {object} Props
 * @property {image} image
 * @property {'l'} size
 * @property {boolean} inverse
 */

const Base = styled(SvgIcon)`
color: ${({ inverse }) => `rgb{${($inverse ? tokens.colors.white : tokens.colors.black)})`};
width: ${({ size }) => tokens.images[size]};
height: ${({ size }) => tokens.images[size]};
`

/**
 * @param {Props} props
 * @returns {JSX.Element}
 */
export const CustomIcon = (props) => {
  const { image, inverse = false, size } = props;

  if (image === "activeCloud") {
    return <Base $inverse={inverse} size={size} ></Base>;
  }

  if (image === "noCloud") {
    return <Base $inverse={inverse} size={size}></Base>;
  }

  if (image === "email") {
    return <Base $inverse={inverse} size={size}></Base>;
  }
};

export default CustomIcon;
