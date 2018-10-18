import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Table } from "reactstrap";

import CategoryForm from "../components/CategoryForm";

const CategoryTable = ({ categories, budgetCategories, categoriesToShow }) => {
  return (
    <Fragment>
      <Table hover borderless>
        <thead>
          <tr>
            <th>Category</th>
            <th>Balance Remaining</th>
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
      <CategoryForm />
    </Fragment>
  );
};

export default withRouter(CategoryTable);
