import { tokens } from "../../data/tokens";
import React from "react";
import styled from 'styled-components';
import { Link as RouterLink } from "react-router-dom";
import { Text } from "../Text";
/**
 * @typeof {object} props
 * @rproperty {JSX.Element} children
 * @property {boolean} inverse
 * @property {string | function} action
 */

/**
 * @param {props} props
 * @returns {JSX.Element}
 */

const Base = styled.button`
padding; 0;
margin: 0;
background: none;
text-decoration: underline;
border-width: 0;
color: ${({ inverse }) =>
  inverse
    ? `rgba(${tokens.colors.white}, ${tokens.opacity.stronger})`
    : `rgba(${tokens.colors.black}, ${tokens.opacity.strong})`};
`;

export const Link = (props) => {
  const { action, children, inverse } = props;

  if (typeof action !== "string")
    return (
      <Base as="button" inverse={inverse} onClick={action}>
        <Text inverse={inverse} size="s">
          {children}
        </Text>
      </Base>
    );

  return (
    <Base as={RouterLink} inverse={inverse} component="a" to={action}>
      <Text inverse={inverse} size="s">
        {children}
      </Text>
    </Base>
  );
};

export default Link;
