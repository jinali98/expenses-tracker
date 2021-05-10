import {
  Button,
  Card,
  CardActions,
  CardContent,
  Icon,
  IconButton,
  Typography,
} from "@material-ui/core";
import React, { useContext } from "react";
import TransactionContext from "../../store/transaction-context";
import DeleteIcon from "@material-ui/icons/Delete";
import styled from "styled-components";

const Transaction = (props) => {
  const ctx = useContext(TransactionContext);

  const removeHandler = () => {
    // console.log(props.id);
    ctx.removeTransaction(props.id);
  };

  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h5" component="p" color="textSecondary">
            {props.text}
          </Typography>
          <Typography variant="h5" component="p" color="textPrimary">
            {props.amount > 0 ? " +" : " -"} $
            {Math.abs(props.amount).toFixed(2)}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            variant="contained"
            color="secondary"
            size="small"
            onClick={removeHandler}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default Transaction;
