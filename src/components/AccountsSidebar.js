import React from "react";
import { ButtonGroup, Button } from "reactstrap";

const AccountsSidebar = props => {
  console.log("AccountsSidebar props: ", props);
  return (
    <ButtonGroup vertical>
      {props.accounts.map(a => (
        <Button key={a.id}>{a.nickname}</Button>
      ))}
    </ButtonGroup>
  );
};

export default AccountsSidebar;
