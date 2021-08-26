import React from "react";
import styled from "styled-components";
import { ButtonBase, Avatar } from "@material-ui/core";
import { tokens } from "../../data/tokens";
import { Text } from "../Text";
import {
  ArrowForwardIos as ArrowIcon,
  Star as StarIcon,
} from "@material-ui/icons";

const Base = styled(ButtonBase)`
  min-height: ${({ size }) => size ==='m' ? '18rem' : '7rem'};
  width: 100%;
  border-button: 1px solid
    rgba(${tokens.colors.black}, ${tokens.opacity.subtler});
  text-align: left;
  justify-content: flex-start;
  padding: ${tokens.spacing.l};

  border-top: 1px solid
    rgba(
      ${tokens.colors.black},
      ${({ first }) => tokens.opacity[first ? "subtitle" : "none"]}
    );

  &:hover {
    background: rgba(${tokens.colors.turquoise}, ${tokens.opacity.subtler});
  }
`;

const Image = styled(Avatar)`
  width: ${({ size }) => tokens.images[size]};
  height: ${({ size }) => tokens.images[size]};
  border-radius: ${tokens.radius.strong};
  margin-right: ${tokens.spacing.m};
  display: none;
  background-color: rgb(${tokens.colors.turquoise});
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 8px 2px 0px rgb(0 0 0 / 14%),
    8px 1px 5px 8px rgb(0 0 0 / 12%);

  @media (min-width: 400px) {
    display: block;
    align-items: center;
    justify-content: center;
  }
`;

const StarBase = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border: 1.5rem solid transparent;
  border-top-color: rgba(${tokens.colors.turquoise});
  border-right-color: rgba(${tokens.colors.turquoise});
`;

const Info = styled.div`
  flex-grow: 1;
`;

const TittleWrap = styled.div`
  padding-bottom: ${tokens.spacing.xs};
`;

const StyledStar = styled(StarIcon)`
  position: absolute;
  top: ${tokens.spacing.s};
  right: ${tokens.spacing.s};
  width: ${tokens.images.xs};
  height: ${tokens.images.xs};
  color: white;
`;

const extractAbbr = (string) => {
  const firstLetter = string[0];
  const extraLetters = string
    .match(/\s\w/g)
    .map((val) => val[1])
    .map((val) => val.toUpperCase())
    .slice(0, 2);

  return `${firstLetter}${extraLetters.join("")}`;
};

/**
 * @typedef {object} Props
 * @property {string} tittle - The tittle of the item to be shown in the preview
 * @property {string} [helper] - Helper text that will be shown underneath the tittle
 * @property {'s' | 'm'} [size] - The size thst the image and itself  will be displayed
 * @property {string} [image] - An image URL, if not suppied will show abbreviation of tittle
 * @property {boolean} [starred] - Will show a star icon in the top right corner
 * @property {JSX.Element} [children] - Any JSX that should be shown under the tittle and helper
 * @property {boolean} [first] - If true the a divider line is added to the top of the element
 */

/**
 * @param {Props} props
 * @returns {JSX.Element}
 */
export const ItemPreview = (props) => {
  const {
    tittle,
    helper,
    size = "s",
    image,
    starred = false,
    children,
    first
  } = props;

  const abbr = image ? null : extractAbbr(tittle);

  return (
    <Base href="#" $first={first} size={size}>
      <Image size={size} src={image} alt="">
        {abbr}
      </Image>

      <Info>
        <TittleWrap>
          <Text size="l" lines={2}>
            {tittle}
          </Text>
        </TittleWrap>
        <Text size="m" lines={1}>
          {helper}
        </Text>
        {children}
      </Info>

      <ArrowIcon />

      {starred && <StarBase />}
      {starred && <StyledStar />}
    </Base>
  );
};

export default ItemPreview;
