import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { FaPlusCircle } from "react-icons/fa";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

import FormSlider from "./FormSlider";

class TransactionForm extends Component {
  state = {
    modal: false,
    name: "",
    description: "",
    amount: 0,
    date: moment(),
    account: null
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleFormChange = (name, value) => {
    this.setState({ [name]: value });
  };

  handleSliderChange = pos => {
    this.setState({ amount: pos });
  };

  handleDateChange = newDate => {
    this.setState({ date: newDate });
  };

  render() {
    const { accounts } = this.props;

    return (
      <Fragment>
        <FaPlusCircle color="green" onClick={this.toggle} />
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader>New Transaction</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  name="name"
                  id="name"
                  value={this.state.name}
                  onChange={e =>
                    this.handleFormChange(e.target.name, e.target.value)
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  name="description"
                  id="description"
                  value={this.state.description}
                  onChange={e =>
                    this.handleFormChange(e.target.name, e.target.value)
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="amount">Amount</Label>
                <FormSlider
                  value={Number(this.state.amount)}
                  handleSliderChange={this.handleSliderChange}
                />
                <Input
                  type="number"
                  name="amount"
                  id="amount"
                  value={this.state.amount}
                  onChange={e =>
                    this.handleFormChange(e.target.name, e.target.value)
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="date">Date</Label>
                <DatePicker
                  onChange={this.handleDateChange}
                  selected={this.state.date}
                />
              </FormGroup>
              <FormGroup>
                <Label for="account">Account</Label>
                <Input
                  type="select"
                  name="account"
                  id="account"
                  value={this.state.account}
                  onChange={e =>
                    this.handleFormChange(e.target.name, e.target.value)
                  }
                >
                  {accounts.map(a => (
                    <option>{a.nickname}</option>
                  ))}
                </Input>
              </FormGroup>
              <Button>Create</Button>
            </Form>
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.accounts
  };
};

export default withRouter(connect(mapStateToProps)(TransactionForm));
