import React from "react";
import styled from "styled-components";
import { ButtonBase } from "@material-ui/core";
import {
  CameraAlt as CameraIcon,
  
} from "@material-ui/icons";
import { useDropzone } from "react-dropzone";

import useCreatePhoto from "./CreatePhoto.useCreatePhoto";
import { ALERTS } from "./CreatePhoto.constants";
import { Layout } from "../../../components/Layout";
import { Text } from "../../../components/Text";
import { tokens } from "../../../data/tokens";

const InputWrap = styled.div`
  padding: ${tokens.spacing.l} 0;
`;

const Image = styled(ButtonBase)`
  height: ${tokens.images.l};
  width: ${tokens.images.l};
  border-radius: ${tokens.radius.strong};
  background-polsition: 50% 50%;
  background-size: cover;
  background-image: ${({ image }) =>
    image ? `url(${image})` : "none"};
  background-color: rgba(
    ${tokens.colors.black},
    ${({ isDragging }) => tokens.opacity[isDragging ? "subtle" : "subtler"]}
  );

  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 8px 2px 0px rgb(0 0 0 / 14%),
    8px 1px 5px 8px rgb(0 0 0 / 12%);

  &:hover {
    ${({ $hasHover }) =>
      !$hasHover
        ? ""
        : `background: rgba(${tokens.colors.black}. ${tokens.opacity.subtle})`};
  }
`;

const Camera = styled(CameraIcon)`
  width: ${tokens.images.s};
  height: ${tokens.images.s};
  opacity: ${tokens.opacity.stong};
`;

export const CreatePhoto = () => {
  const { image, uploadImage, alert, save, phase, edit, cancel } =
    useCreatePhoto();

  

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop: uploadImage,
  });

  if (phase === "display") {
    return (
      <Layout
        title="Photo"
        primary={["Save", save]}
        secondary={["Change Photo", edit]}
        alert={ALERTS[alert]}
      >
        <Text size="s">Provide a photo to be asociated with this account</Text>

        <InputWrap>
          <Image image={image} />
        </InputWrap>
      </Layout>
    );
  }

  return (
    <Layout
      title="Photo"
      form
      primary={["Add Photo", () => open()]}
      secondary={["Cancel", cancel]}
      alert={ALERTS[alert]}
    >
      <Text size="s">Provide a photo to be asociated with this account</Text>
      <InputWrap>
        <Image
          $hasHover
          {...getRootProps()}
          isDragActive={isDragActive}
          image={image}
        >
          <Camera />
          <input {...getInputProps()} />
        </Image>
      </InputWrap>
    </Layout>
  );
};

export default CreatePhoto;
