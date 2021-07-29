import React from "react";
import { Text } from "./Text";
import styled from "styled-components";
import { tokens } from "../../data/tokens";

const DarkBg = styled.div`
  width: 100%;
  background: rgb(${tokens.colors.turquoise});
`;

export const Demo = () => {
  return (
    <div>
      <Text inverse size="s">
        My name is Nwabisa
      </Text>
      <Text inverse size="m">
        My surname is Dlokweni
      </Text>
      <Text inverse size="l">
        I am 24 years old
      </Text>
      <Text inverse size="xl">
        I am a girl
      </Text>

      <Text inverse size="s">
        My name is Nwabisa
      </Text>
      <Text inverse size="m">
        My surname is Dlokweni
      </Text>
      <Text inverse size="l">
        I am 24 years old
      </Text>

      <DarkBg>
        <Text inverse size="s">
          My name is Nwabisa
        </Text>
        <Text inverse size="m">
          My surname is Dlokweni
        </Text>
        <Text inverse size="l">
          I am 24 years old
        </Text>
        <Text inverse size="xl">
          I am a girl
        </Text>

        <Text inverse size="s">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper
          eget justo nec bibendum. Donec commodo eu neque vel pharetra. Nunc
          tincidunt tristique turpis et maximus. Sed pellentesque aliquet
          tortor. Integer varius nec leo ut vulputate. Nullam bibendum, mauris
          sed viverra suscipit, sem turpis blandit libero, id ullamcorper nibh
          turpis ut nibh. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Nam congue suscipit est sit amet malesuada. Nullam
          scelerisque pulvinar lectus, quis congue magna posuere sit amet.
          Nullam gravida at justo nec imperdiet. Suspendisse iaculis vel sem non
          posuere. Pellentesque egestas convallis efficitur. In varius molestie
          purus quis feugiat. Morbi et lobortis metus. Donec malesuada quis sem
          quis ullamcorper. Nunc vehicula lacus in mattis egestas.
        </Text>

        <Text inverse size="m">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper
          eget justo nec bibendum. Donec commodo eu neque vel pharetra. Nunc
          tincidunt tristique turpis et maximus. Sed pellentesque aliquet
          tortor. Integer varius nec leo ut vulputate. Nullam bibendum, mauris
          sed viverra suscipit, sem turpis blandit libero, id ullamcorper nibh
          turpis ut nibh. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Nam congue suscipit est sit amet malesuada. Nullam
          scelerisque pulvinar lectus, quis congue magna posuere sit amet.
          Nullam gravida at justo nec imperdiet. Suspendisse iaculis vel sem non
          posuere. Pellentesque egestas convallis efficitur. In varius molestie
          purus quis feugiat. Morbi et lobortis metus. Donec malesuada quis sem
          quis ullamcorper. Nunc vehicula lacus in mattis egestas.
        </Text>

        <Text inverse size="l">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper
          eget justo nec bibendum. Donec commodo eu neque vel pharetra. Nunc
          tincidunt tristique turpis et maximus. Sed pellentesque aliquet
          tortor. Integer varius nec leo ut vulputate. Nullam bibendum, mauris
          sed viverra suscipit, sem turpis blandit libero, id ullamcorper nibh
          turpis ut nibh. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Nam congue suscipit est sit amet malesuada. Nullam
          scelerisque pulvinar lectus, quis congue magna posuere sit amet.
          Nullam gravida at justo nec imperdiet. Suspendisse iaculis vel sem non
          posuere. Pellentesque egestas convallis efficitur. In varius molestie
          purus quis feugiat. Morbi et lobortis metus. Donec malesuada quis sem
          quis ullamcorper. Nunc vehicula lacus in mattis egestas.
        </Text>
      </DarkBg>
    </div>
  );
};

export default Demo;
