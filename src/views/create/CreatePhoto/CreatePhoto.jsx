import React from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import { useCreatePhoto } from "./CreatePhoto.useCreatePhoto";
import { CameraAlt as CameraIcon } from "@material-ui/icons";
import { Layout } from "../../../components/Layout";
import { ButtonBase } from "@material-ui/core";
import { Text } from "../../../components/Text";
import { tokens } from "../../../data/tokens";
import { ALERTS } from "./CreatePhoto.useCreatePhoto";

const InputWrap = styled.div`
  padding: ${tokens.spacing.l} 0;
`;

const Image = styled(ButtonBase)`
  height: ${tokens.images.l};
  width: ${tokens.images.l};
  border-radius: ${tokens.radius.strong};
  background-position: 50% 50%;
  backgroung-size: cover;
  background-image: ${({ image }) => (image ? `url('${image}')` : "none")};
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
  opacity: ${tokens.opacity.strong};
`;

export const CreatePhoto = () => {
  const { image, uploadImage, alert, save, phase, edit } = useCreatePhoto();
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop: uploadImage,
  });

  if (phase === "display") {
    return (
      <Layout
        title="Photo"
        form
        primary={["Save", save]}
        secondary={["Change Photo", edit]}
        alert={ALERTS[alert]}
      >
        <Text size="m">
          Please provide a photo or image associated with this account.
        </Text>

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
      secondary={["Back", "/"]}
      alert={ALERTS[alert]}
    >
      <Text size="m">
        Please provide a photo or image associated with this account.
      </Text>

      <InputWrap>
        <Image
          $hasHover
          {...getRootProps()}
          isDragging={isDragActive}
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
