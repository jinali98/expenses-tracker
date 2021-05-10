import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import TransactionContext from "../../store/transaction-context";
import { AddLayout } from "./AddTransactionStyles";

const AddTransaction = () => {
  const ctx = useContext(TransactionContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorAmount, setErrorAmount] = useState(false);

  const transactionHandler = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      setErrorTitle(true);
      return;
    }
    if (amount == 0) {
      setErrorAmount(true);
      return;
    }
    const id = Math.floor(Math.random() * 100);
    ctx.addTransaction({ id, text, amount });
    setAmount("");
    setText("");
    setErrorAmount(false);
    setErrorTitle(false);
  };

  return (
    <AddLayout>
      <Card>
        <CardContent>
          <form onSubmit={transactionHandler} autoComplete="off">
            <Typography variant="h5" color="textPrimary">
              Add new Transaction
            </Typography>
            <Typography variant="body1" color="textSecondary">
              (negative values for expenses and positive values for income)
            </Typography>

            <TextField
              value={text}
              onChange={(e) => setText(e.target.value)}
              label="Description"
              variant="outlined"
              type="text"
              placeholder="Enter text..."
              required
              multiline
              rowsMax={2}
              fullWidth
              error={errorTitle}
              style={{ margin: "15px 0" }}
            />

            <TextField
              label="Amount"
              variant="outlined"
              type="number"
              placeholder="Enter amount..."
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              fullWidth
              error={errorAmount}
              style={{ margin: "15px 0" }}
            />

            <Button variant="contained" color="primary" type="submit">
              Add Transaction
            </Button>
          </form>
        </CardContent>
      </Card>
    </AddLayout>
  );
};

export default AddTransaction;
