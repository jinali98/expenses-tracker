import React, { createContext } from "react";

const TransactionContext = createContext({
  income: 0,
  expenses: 0,
  transactions: [],
  balance: 0,
  addTransaction: (transaction) => {},
  removeTransaction: (id) => {},
});

export default TransactionContext;
