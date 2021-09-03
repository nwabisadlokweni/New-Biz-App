import React, { useState, useEffect } from "react";
import styled from "styled-components";

import useDisplayShoots from "../DisplayShoots/DisplayShoots.useDisplayShoots"
import Delete from "../DisplayShoots/DisplayShoots.Delete"
import Edit from "../DisplayShoots/DisplayShoots.Edit"
import Add from "../DisplayShoots/DisplayShoots.Add"
import { Layout } from "../../../components/Layout";
import { Text } from "../../../components/Text";
import {Edit as EditIcon, Delete as DeleteIcon} from "@material-ui/icons";
import { Button, Card, Select, MenuItem, TextField } from "@material-ui/core";
import { format } from "date-fns";
import { tokens } from "../../../data/tokens";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  background: ${tokens.colors.turquoise};
`;

const Controls = styled.div`
  padding: 1rem;
`;

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
const applySorting = (shoots, sorting, search) => {
  const filteredShoots =
    search.length < 3
      ? shoots
      : shoots.filter(
          ({ customer, type }) => {
            console.log(customer, type)
            return customer.includes(search) || type.includes(search)
          }
        );
      
  if (sorting === "date-closest-furthest") {
    return filteredShoots.sort((a, b) => a.date.getTime() - b.date.getTime());
  }
  if (sorting === "date-furthest-closest") {
    return filteredShoots.sort((a, b) => b.date.getTime() - a.date.getTime());
  }
  throw new Error("Invalid sorting supplied");
};

export const DisplayShoots = () => {  
  const [{shoots, alert, editing, deleting, adding}, actions] = useDisplayShoots();

  const [sorting, setSorting] = useState("date-closest-furthest");
  const [search, setSearch] = useState("");
  const [displayedShoots, setDisplayedShoots] = useState(
    applySorting(shoots, sorting, search)
  );

  useEffect(() => {
    setDisplayedShoots(applySorting(shoots, sorting, search));
  }, [search]);

  if(adding){
    return (
      <div>
        123
        <Add
          date={adding.date}
          onDateChange={(newValue) => actions.update('date',newValue)}
          customer={adding.customer}
          onCancel={() => actions.add(null)}
          onCustomerChange={(newValue) => actions.update('customer',newValue)}
          onSave={() => actions.add(adding.id)}
          type={adding.type}
          onTypeChange={(newValue) => actions.update('type',newValue)}
          alert = {alert}
        />
      </div>
    );
  }

  if(deleting){
    return (
      <div>
        <Delete
          customer= {deleting.customer}
          date={deleting.date}
          onCancel={() => actions.delete(null)}
          onDelete={() => actions.delete(deleting.id)}
          type={deleting.type}
        />
      </div>
    );
  }

  if(editing){
    return (
      <div>
        <Edit
          date={editing.date}
          onDateChange={(newValue) => actions.update('date',newValue)}
          customer={editing.customer}
          onCancel={() => actions.edit(null)}
          onCustomerChange={(newValue) => actions.update('customer',newValue)}
          onSave={() => actions.edit(editing.id)}
          type={editing.type}
          onTypeChange={(newValue) => actions.update('type',newValue)}
        />
      </div>
    );
  }

  return (
    <Page>
      <h1>Schedule</h1>
      <StyledButton
        startIcon={<EditIcon />}
        onClick={() => actions.add(true)}
        variant="contained"
      >
        ADD SHOOT
      </StyledButton>
      <Controls>
        <TextField
          variant="outlined"
          label="Search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </Controls>
      <Controls>
        <Select
          value={sorting}
          variant="outlined"
          onChange={(event) => {
            if (!event.target.value || typeof event.target.value !== "string")
              throw new Error("No value on selection");
            setSorting(event.target.value);
          }}
        >
          <MenuItem value="date-closest-furthest">
            Date (Closest - Furthest)
          </MenuItem>
          <MenuItem value="date-furthest-closest">
            Date (Furthest - Closest)
          </MenuItem>
        </Select>
      </Controls>
      <List>
        {displayedShoots.map(({ id, customer, date, type }) => {
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
    </Page>
  );
};

export default DisplayShoots;