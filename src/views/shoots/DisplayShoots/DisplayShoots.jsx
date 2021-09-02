import React from "react";
import styled from "styled-components";

import useDisplayShoots from "../DisplayShoots/DisplayShoots.useDisplayShoots"
import { Layout } from "../../../components/Layout";
import { Text } from "../../../components/Text";
import {Edit as EditIcon, Delete as DeleteIcon} from "@material-ui/icons";
import { Button, Card} from "@material-ui/core";
import { format } from "date-fns";
import { tokens } from "../../../data/tokens";

const StyledCard = styled(Card)`
  padding: 1rem;
  margin: 1rem;
`;

const StyledButton = styled(Button)`
  && {
    margin: 0 0.5rem;
  }
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ButtonArea = styled.div`
  padding-top: 16px;
`;

export const DisplayShoots = () => {
  const [{ shoots }, actions] = useDisplayShoots();

  return (
    <Layout
      title="Display Shoots"
      secondary={["Back", "/"]}
    //   alert={ALERTS[alert]}
    >
      <Text size="s">Here are all your shoots</Text>
      <List>
        {shoots.map(({ id, customer, date, type }) => {
          return (
            <StyledCard key={id}>
              <div>
                <h1>{customer}</h1>
                <h3>{type}</h3>
                <h2>{format(date, "yyyy-MM-dd")}</h2>
                

                <ButtonArea>
                  <StyledButton
                    startIcon={<EditIcon />}
                    onClick={() => actions.edit(id)}
                    variant="contained"
                  >
                    EDIT
                  </StyledButton>

                  <StyledButton
                    startIcon={<DeleteIcon />}
                    onClick={() => actions.delete(id)}
                    variant="contained"
                  >
                    DELETE
                  </StyledButton>
                </ButtonArea>
              </div>
            </StyledCard>
          );
        })}
      </List>
      
    </Layout>
  );
};

export default DisplayShoots;