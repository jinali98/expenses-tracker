import React, { useContext } from "react";
import TransactionContext from "../../store/transaction-context";
import Transaction from "./Transaction";
import { DisplayLayout } from "./TransactionListStyles";

const TransactionList = () => {
  const ctx = useContext(TransactionContext);
  // console.log(ctx.income);
  // console.log(ctx.expenses);

  return (
    <>
      <DisplayLayout>
        {ctx.transactions.map((each) => {
          return (
            <Transaction
              key={each.id}
              id={each.id}
              text={each.text}
              amount={each.amount}
            />
          );
        })}
      </DisplayLayout>
    </>
  );
};

export default TransactionList;
