import React, { Fragment } from "react";
import { Table } from "reactstrap";

const AccountTransactionTable = ({ currentAccount }) => {
  return (
    <Fragment>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>{}</tbody>
      </Table>
    </Fragment>
  );
};

export default AccountTransactionTable;
