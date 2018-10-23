import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Jumbotron } from "reactstrap";

import CategoryTable from "../components/CategoryTable";

const BudgetMonthContainer = ({
  categories,
  transactions,
  currentBudget,
  categoriesToShow
}) => {
  return (
    <Jumbotron>
      <h4 className="display-4">October 2018</h4>
      <hr className="my-2" />
      <CategoryTable
        currentBudget={currentBudget}
        categories={categories.filter(c => c.budget.id === currentBudget.id)}
        transactions={transactions}
      />
    </Jumbotron>
  );
};

const mapStateToProps = state => {
  return {
    categories: state.categories,
    transactions: state.transactions
  };
};

export default withRouter(connect(mapStateToProps)(BudgetMonthContainer));
