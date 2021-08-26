import React from "react";
import { CustomIcon } from "./CustomIcon";
import styled from "styled-components";
import tokens from "../../data/tokens";

export const Demo = () => {
  return (
    <div>
      <CustomIcon image="activeCloud" />
      <CustomIcon image="noCloud" />
      <CustomIcon image="email" />

    </div>
  );
};

export default Demo;
