import React from "react";
import styled from "styled-components";
import { MailOutline as Icon } from "@material-ui/icons";

import { Layout } from "../../../components/Layout";
import { Text } from "../../../components/Text";
import { tokens } from "../../../data/tokens";

const Content = styled.div`
  padding: 1rem;
`;
const StyledIcon = styled(Icon)`
  width: ${tokens.images.l};
  height: ${tokens.images.l};
  colors: rgb(${tokens.colors.white});
`;

export const EmailSent = () => {
  return (
    <Layout title="Email Sent" inverse secondary={['cancel', '/']}>
      <Content>
        <StyledIcon />
        <Text size="l" inverse>
          Please check your email inbox and your span folder.
        </Text>
      </Content>
    </Layout>
  );
};

export default EmailSent;
