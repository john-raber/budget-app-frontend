import React, { Fragment } from "react";
import { Table } from "reactstrap";

const AccountTransactionTable = ({ currentAccount, transactions }) => {
  return (
    <Fragment>
      <h3>{currentAccount.nickname}</h3>
      <Table hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(t => (
            <tr key={t.id} transaction={t}>
              <th>{t.name}</th>
              <th>{t.description}</th>
              <th>{t.category.name}</th>
              <th>${Number(t.amount).toFixed(2)}</th>
            </tr>
          ))}
        </tbody>
      </Table>
    </Fragment>
  );
};

export default AccountTransactionTable;
