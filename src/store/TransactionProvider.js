import React, { useReducer } from "react";
import TransactionContext from "./transaction-context";

const defaultTransaction = {
  balance: 0,
  income: 0,
  expenses: 0,
  transactions: [],
};

const transactionReducer = (state, action) => {
  let updatedExpense = Number(state.expenses);
  let updatedIncome = Number(state.income);
  let updatedBalance = Number(state.balance);

  if (action.type === "ADD") {
    const newTransaction = action.transaction;
    const updatedTransactions = [...state.transactions, newTransaction];

    if (action.transaction.amount > 0) {
      const newIncome = action.transaction.amount;
      updatedIncome = Number(state.income) + Number(newIncome);
      updatedBalance = Number(state.balance) + Number(newIncome);
    } else {
      const newExpense = action.transaction.amount;
      updatedExpense = Number(state.expenses) + Number(newExpense);
      updatedBalance = Number(state.balance) + Number(newExpense);
    }

    return {
      transactions: updatedTransactions,
      income: updatedIncome,
      expenses: updatedExpense,
      balance: updatedBalance,
    };
  }

  if (action.type === "REMOVE") {
    const id = action.id;
    const exisitingTransactionIndex = state.transactions.findIndex(
      (item) => item.id === action.id
    );

    console.log(exisitingTransactionIndex);

    const amountToBeRemoved = Number(
      state.transactions[exisitingTransactionIndex].amount
    );

    if (amountToBeRemoved > 0) {
      updatedIncome = Number(state.income) - amountToBeRemoved;
      updatedBalance = Number(state.balance) - amountToBeRemoved;
    } else {
      updatedExpense = Number(state.expenses) - amountToBeRemoved;
      updatedBalance = Number(state.balance) - amountToBeRemoved;
    }

    const updatedTransactions = state.transactions.filter(
      (item) => item.id !== action.id
    );

    return {
      transactions: updatedTransactions,
      income: updatedIncome,
      expenses: updatedExpense,
      balance: updatedBalance,
    };
  }

  return defaultTransaction;
};

const TransactionProvider = (props) => {
  const [transactionState, dispatchAction] = useReducer(
    transactionReducer,
    defaultTransaction
  );

  const addTransactionHandler = (transaction) => {
    dispatchAction({ type: "ADD", transaction: transaction });
  };

  const removeTransactionHandler = (id) => {
    dispatchAction({ type: "REMOVE", id: id });
  };

  const transactionContext = {
    income: transactionState.income,
    expenses: transactionState.expenses,
    transactions: transactionState.transactions,
    addTransaction: addTransactionHandler,
    removeTransaction: removeTransactionHandler,
    balance: transactionState.balance,
  };

  return (
    <TransactionContext.Provider value={transactionContext}>
      {props.children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
