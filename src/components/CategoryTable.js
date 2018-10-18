import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Table } from "reactstrap";
import { FaEdit } from "react-icons/fa";

import CategoryForm from "../components/CategoryForm";
import TransactionForm from "../components/TransactionForm";

const CategoryTable = ({ categories, budgetCategories, categoriesToShow }) => {
  return (
    <Fragment>
      <Table hover>
        <thead>
          <tr>
            <th>
              Category <CategoryForm />
            </th>
            <th>
              Monthly Target <FaEdit color="darkRed" />
            </th>
            <th>
              Transactions <TransactionForm />
            </th>
            <th>Ending Balance</th>
          </tr>
        </thead>
        <tbody>
          {budgetCategories.map(bc => {
            let cat = categories.find(c => {
              console.log(c);
              console.log(bc);
              return c.id === bc.category_id;
            });

            return (
              <tr key={cat.id}>
                <th scope="row">{cat.name}</th>
                <th scope="row">{`$${bc.target}`}</th>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Fragment>
  );
};

export default withRouter(CategoryTable);
