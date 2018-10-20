import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Table } from "reactstrap";
import { FaEdit } from "react-icons/fa";

import CategoryForm from "../components/CategoryForm";
import TransactionForm from "../components/TransactionForm";

const CategoryTable = ({ categories, transactions, currentBudget }) => {
  return (
    <Fragment>
      <Table hover>
        <thead>
          <tr>
            <th>
              Category <CategoryForm currentBudget={currentBudget} />
            </th>
            <th>Starting Balance</th>
            <th>Transactions</th>
            <th>Ending Balance</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(c => {
            return (
              <tr key={c.id}>
                <th scope="row">{c.name}</th>
                <th scope="row">
                  {`$${Number(c.balance).toFixed(2)}`}{" "}
                  <FaEdit color="darkRed" />
                </th>
                <th scope="row">
                  {`$${transactions
                    .filter(t => t.category.id === c.id)
                    .reduce((total, n) => {
                      return total + Number(n.amount);
                    }, 0)
                    .toFixed(2)}`}{" "}
                  <TransactionForm category={c} />
                </th>
                <th scope="row">
                  {(
                    c.balance -
                    transactions
                      .filter(t => t.category.id === c.id)
                      .reduce((total, n) => {
                        return total + Number(n.amount);
                      }, 0)
                  ).toFixed(2)}
                </th>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Fragment>
  );
};

export default withRouter(CategoryTable);
