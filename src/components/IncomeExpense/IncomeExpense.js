import React, { useContext } from "react";
import TransactionContext from "../../store/transaction-context";

import { Card, CardContent, Typography } from "@material-ui/core";
import {
  ExpenseLayout,
  IncomeExpenseLayout,
  IncomeLayout,
} from "./IncomeExpensesStyles";

const IncomeExpense = () => {
  const ctx = useContext(TransactionContext);

  return (
    <IncomeExpenseLayout>
      <IncomeLayout>
        <Card style={{ borderBottom: "5px solid #e91e63" }}>
          <CardContent>
            <Typography variant="h5" component="p" color="textPrimary">
              Income
            </Typography>
            <Typography>+${ctx.income.toFixed(2)}</Typography>
          </CardContent>
        </Card>
      </IncomeLayout>
      <ExpenseLayout>
        <Card style={{ borderBottom: "5px solid #e91e63" }}>
          <CardContent>
            <Typography variant="h5" component="p" color="textPrimary">
              Expenses
            </Typography>
            <Typography>-${Math.abs(ctx.expenses).toFixed(2)}</Typography>
          </CardContent>
        </Card>
      </ExpenseLayout>
    </IncomeExpenseLayout>
  );
};

export default IncomeExpense;
