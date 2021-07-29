import React from "react";
import { Layout } from "./Layout";
import styled from "styled-components";

const Wrapper = styled.div`
  hover: 1px dotted blue;
  height: 500px;
`;

export const Demo = () => {
  return (
    <div>
      <Wrapper>
        <Layout title="Nwabisa Dlokweni"> Nwabisa Dlokweni</Layout>
      </Wrapper>

      <Wrapper>
        <Layout title="Nwabisa Dlokweni" primary={["primary", "#"]}>
          Nwabisa Dlokweni
        </Layout>
      </Wrapper>

      <Wrapper>
        <Layout
          title="Nwabisa Dlokweni"
          primary={["primary", "#"]}
          secondary={["secondary", "#"]}
        >
          Nwabisa Dlokweni
        </Layout>
      </Wrapper>

      <Wrapper>
        <Layout
          title="Nwabisa Dlokweni"
          primary={["primary", "#"]}
          secondary={["secondary", "#"]}
          extra={["extra", "#"]}
        >
          Nwabisa Dlokweni
        </Layout>
      </Wrapper>

      <Wrapper>
        <Layout
          title="Nwabisa Dlokweni"
          primary={["primary", "#"]}
          secondary={["secondary", "#"]}
          extra={["extra", "#"]}
          alert={{
            tittle: 'Hello',
            nature: 'resolving'
          }}
        >
          Nwabisa Dlokweni
        </Layout>
      </Wrapper>

      <Wrapper>
        <Layout
          title="Nwabisa Dlokweni"
          primary={["primary", "#"]}
          secondary={["secondary", "#"]}
          extra={["extra", "#"]}
          alert={{
            tittle: 'Hello',
            nature: 'error',
            description: 'what ever'
          }}
        >
          Nwabisa Dlokweni
        </Layout>
      </Wrapper>
    </div>
  );
};

export default Demo;
