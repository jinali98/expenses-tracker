import { Card, CardContent, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import TransactionContext from "../../store/transaction-context";
import { BalanceLayout } from "./BalanceStyles";

const Balance = (props) => {
  const ctx = useContext(TransactionContext);

  return (
    <BalanceLayout>
      <Card style={{ borderBottom: "5px solid #7b1fa2" }}>
        <CardContent>
          <Typography variant="h5" component="p" color="textPrimary">
            Balance
          </Typography>
          <Typography variant="h3" component="p" color="textPrimary">
            $ {ctx.balance.toFixed(2)}
          </Typography>
        </CardContent>
      </Card>
    </BalanceLayout>
  );
};

export default Balance;
