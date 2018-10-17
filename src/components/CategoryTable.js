import React, { Fragment } from "react";
import { connect } from "react-redux";
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
          {categories.map(c => {
            if (categoriesToShow.includes(c.id)) {
              return (
                <tr key={c.id}>
                  <th scope="row">{c.name}</th>
                  <th scope="row">$89</th>
                </tr>
              );
            }
          })}
        </tbody>
      </Table>
      <CategoryForm />
    </Fragment>
  );
};

export default withRouter(CategoryTable);
