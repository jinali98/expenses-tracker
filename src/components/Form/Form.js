import React from "react";
import AddTransaction from "../AddTransaction/AddTransaction";
import Balance from "../Balance/Balance";
import IncomeExpense from "../IncomeExpense/IncomeExpense";
import { FormLayout } from "./FormStyles";

const Form = () => {
  return (
    <FormLayout>
      <Balance />
      <IncomeExpense />
      <AddTransaction />
    </FormLayout>
  );
};

export default Form;
