import React, { useState } from "react";
import styled from "styled-components";
import { Button, Card, Dialog, TextField } from "@material-ui/core";
import { Cancel as CloseIcon, Add as CheckIcon } from "@material-ui/icons";

import { format } from "date-fns";

const DialogContent = styled.div`
  padding: 32px;
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

const ButtonArea = styled.div`
  padding-top: 16px;
`;

const TextFieldWrap = styled.div`
padding: 0.5rem 0;
`

/**
 *
 * @typedef {object} props
 * @property {string} customer
 * @property {(onCustomerChange: string) => void} onCustomerChange
 * @property {function} onCancel
 * @property {function} onSave
 */

/**
 * @title Add
 * @param {props} props
 * @returns {JSX.Element}
 */

export const Add = (props) => {
  const {
    customer,
    date,
    type,
    onCustomerChange,
    onDateChange,
    onTypeChange,
    onCancel,
    onSave,
    alert,
  } = props;

  console.log(onCustomerChange)
  const handleCustomerChange = (event) => onCustomerChange(event.target.value);
  const handleDateChange = (event) => onDateChange(new Date(event.target.value));
  const handleTypeChange = (event) => onTypeChange(event.target.value);

  return (
    <Dialog open>
      <DialogContent>
        <h1>Enter Details</h1>

        <StyledCard>
          <TextFieldWrap>
            <TextField
              label="Customer"
              value={customer}
              onChange={handleCustomerChange}
            />
          </TextFieldWrap>

          <TextFieldWrap>
            <TextField label="Type" value={type} onChange={handleTypeChange} />
          </TextFieldWrap>

          <TextFieldWrap>
            <TextField
              label="Date"
              type="date"
              onChange={handleDateChange}
              value={date ? format(date, "yyyy-MM-dd"): undefined}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </TextFieldWrap>
        </StyledCard>

        {alert}

        <ButtonArea>
          <StyledButton
            startIcon={<CloseIcon />}
            onClick={onCancel}
            variant="contained"
          >
            Cancel
          </StyledButton>

          <StyledButton
            startIcon={<CheckIcon />}
            onClick={onSave}
            variant="contained"
          >
            Add
          </StyledButton>
        </ButtonArea>
      </DialogContent>
    </Dialog>
  );
};
export default Add;
