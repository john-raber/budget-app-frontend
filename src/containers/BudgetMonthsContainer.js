import React from "react";
import { Jumbotron, Table } from "reactstrap";

const BudgetMonthsContainer = () => {
  return (
    <Jumbotron>
      {/* all of the elements inside the Jumbotron should be moved into a
        separate component */}
      <h4 className="display-4">October 2018</h4>
      <p className="lead">$403 left to allocate</p>
      <hr className="my-2" />
      <Table hover borderless>
        <thead>
          <tr>
            <th>Category</th>
            <th>Balance Remaining</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Food</th>
            <th scope="row">$89</th>
          </tr>
          <tr>
            <th scope="row">Utilities</th>
            <th scope="row">$276</th>
          </tr>
        </tbody>
      </Table>
    </Jumbotron>
  );
};

export default BudgetMonthsContainer;
