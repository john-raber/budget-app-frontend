import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { ButtonGroup, Button } from "reactstrap";

import { setCurrentAccount } from "../actions/currentAccount";

const AccountsSidebar = ({
  accounts,
  setCurrentAccount,
  history,
  location
}) => {
  return (
    <ButtonGroup vertical>
      {accounts.map(a => (
        <Button
          key={a.id}
          onClick={() => {
            setCurrentAccount(a);
            history.push(`${location.pathname}/${a.nickname.toLowerCase()}`);
          }}
        >
          {a.nickname}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default withRouter(
  connect(
    null,
    { setCurrentAccount }
  )(AccountsSidebar)
);
