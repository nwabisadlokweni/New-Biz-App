import React from "react";
import styled from "styled-components";
import { Button as MuiButton } from "@material-ui/core";
import { tokens } from "../../data/tokens";
import { Link } from "react-router-dom";
import '../../types/action'

const COLORS = {
  white: `rgb(${tokens.colors.white})`,
  turquoise: `rgb(${tokens.colors.turquoise})`,
  black: `rgb(${tokens.colors.black})`,
  none: "transparent",
  turquoiseSubtler: `rgb(${tokens.colors.turquoise}, ${tokens.opacity.subtler})`,
  turquoiseStronger: `rgb(${tokens.colors.turquoise}, ${tokens.opacity.stronger})`,
  whiteSubtler: `rgb(${tokens.colors.white}, ${tokens.opacity.subtler})`,
  blackStronger: `rgb(${tokens.colors.white}, ${tokens.opacity.stronger})`,
};

const calcBackground = ({ importance, $inverse }) => {
  if (importance === "primary" && $inverse) return COLORS.white;
  if ($inverse || importance === "secondary") return COLORS.none;
  return COLORS.turquoise;
};

const calcColor = ({ importance, $inverse }) => {
  if (importance === "primary" && $inverse) return COLORS.turquoise;
  if ($inverse || importance === "primary") return COLORS.white;
  return COLORS.turquoise;
};

const calcBorder = ({ importance, $inverse }) => {
  if (importance === "primary") return `1px solid ${COLORS.none}`;
  if ($inverse) return `1px solid ${COLORS.white}`;
  return `1px solid ${COLORS.turquoise}`;
};

const calcHover = ({ importance, $inverse }) => {
  if (importance === "primary" && $inverse) return COLORS.whiteStronger;
  if ($inverse) return COLORS.whiteSubtler;
  if (importance === "primary") return COLORS.turquoiseStronger;
  return COLORS.turquoiseSubtler;
};

const calcActionProps = (action) => {
  if (action === true) {
    return { type: "submit" };
  }

  if (!action) {
    return { disabled: true, type: "button" };
  }

  if (typeof action !== "string")
    return { component: "button", onClick: action, type: "button" };

  return { component: Link, to: action, type: "button" };
};

const StyledButton = styled(MuiButton)`
  color: ${calcColor};
  background: ${calcBackground};
  border: ${calcBorder};
  padding: ${tokens.spacing.s};

  &:hover {
    background: ${calcHover};
  }
`;

/**
 * @typedef {object} props
 * @property {JSX.Element} children
 * @property {'primary' | 'secondary'} importance
 * @property {boolean} inverse
 * @property {action} action
 */

/**
 * @param {props} props
 * @returns {JSX.Element}
 */

export const Button = (props) => {
  const {
    children,
    detail = {},
    inverse,
    importance = "secondary",
    action,
    full = false,
  } = props;

  const variant = importance === "primary" ? "contained" : "outlined";
  const actionProps = calcActionProps(action, detail);

  return (
    <StyledButton
      $inverse={inverse}
      importance={importance}
      children={children}
      fullWidth={full}
      variant={variant}
      {...actionProps}
    />
  );
};

export default Button;
