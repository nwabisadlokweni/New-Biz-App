import React from "react";
import styled from "styled-components";
import { Button, Card, Dialog } from "@material-ui/core";
import {Close as CancelIcon, Delete as DeleteIcon} from "@material-ui/icons";
import { format } from "date-fns";



const DialogContent = styled.div`
  padding: 32px;
`;

const StyledCard = styled(Card)`
  padding: 1rem;
  margin: 1rem;
`;
const ButtonArea = styled.div`
  padding-top: 16px;
`;
const StyledButton = styled(Button)`
  && {
    margin: 0 0.5rem;
  }
`;
/**
 * 
 * @typedef {object} props
 * @property {string} customer
 * @property {Date} date
 * @property {string} type
 * @property {Function} onCancel
 * @property {Function} onDelete
 */

/**
 * @title Delete
 * @param {props} props 
 * @returns {JSX.Element}
 */

export const Delete = (props) => {
    const {customer, date, type, onCancel, onDelete} = props;
    return (
        <Dialog open>
            <DialogContent>
                <h1>Please confirm</h1>
                <p>The following item will be deleted.</p>

                <StyledCard>
                <div>
                    <h1>{customer}</h1>
                    <h2>{format(date, "d MMMM yyyy")}</h2>
                    <h3>{type}</h3>
                </div>
                </StyledCard>

                <ButtonArea>
                <StyledButton
                    startIcon={<CancelIcon />}
                    onClick={onCancel}
                    variant="contained"
                >
                    Cancel
                </StyledButton>

                <StyledButton
                    startIcon={<DeleteIcon />}
                    onClick={onDelete}
                    variant="contained"
                >
                    Delete
                </StyledButton>
                </ButtonArea>
            </DialogContent>
        </Dialog>
    )
}

export default Delete;
