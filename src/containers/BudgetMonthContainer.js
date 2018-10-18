import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Jumbotron } from "reactstrap";

import CategoryTable from "../components/CategoryTable";

const BudgetMonthContainer = ({
  categories,
  budgetCategories,
  categoriesToShow
}) => {
  return (
    <Jumbotron>
      <h4 className="display-4">October 2018</h4>
      <p className="lead">$403 left to allocate</p>
      <hr className="my-2" />
      <CategoryTable
        categories={categories}
        budgetCategories={budgetCategories}
        categoriesToShow={categoriesToShow}
      />
    </Jumbotron>
  );
};

const mapStateToProps = state => {
  return {
    categories: state.categories,
    budgetCategories: state.budgetCategories,
    categoriesToShow: state.budgetCategories.map(bc => bc.category_id)
  };
};

export default withRouter(connect(mapStateToProps)(BudgetMonthContainer));
