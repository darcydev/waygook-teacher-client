import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Form, Input, Select } from "antd";

import FormButton from "../UI/FormButton";

const { Option } = Select;

// TODO.. test whether it is possible to use a stateless component
// and simply pass the 'values' from the Ant form as opposed to using
// state
export default class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      success: false
    };
  }

  login() {
    axios({
      method: "POST",
      url: "http://localhost:3002/login.php",
      data: this.state
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Logged in!");

        this.setState({ success: true });
      } else if (response.data.status === "fail") {
        alert("Failed to log in");
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    console.log("form button clicked");

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);

        this.setState(
          {
            username: values.username,
            password: values.password
          },
          () => this.login()
        );
      }
    });
  };

  // to compare to two passwords
  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;

    if (value && value !== form.getFieldValue("password"))
      callback("Password do not match");
    else callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit} className="register-form">
        <Form.Item hasFeedback>
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "Email invalid"
              },
              {
                required: true,
                message: "Email required"
              }
            ]
          })(<Input placeholder="Email" />)}
        </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "Password required"
              },
              {
                validator: this.validateToNextPassword
              }
            ]
          })(<Input.Password placeholder="Password" />)}
        </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator("confirm", {
            rules: [
              {
                required: true,
                message: "Please confirm your password!"
              },
              {
                validator: this.compareToFirstPassword
              }
            ]
          })(<Input.Password placeholder="Confirm" />)}
        </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator("role", {
            rules: [
              {
                required: true,
                message: "Please select your role"
              }
            ]
          })(
            <Select defaultValue={undefined}>
              <Option value="teacher">Teacher</Option>
              <Option value="student">Student</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item>
          <FormButton text="Register" />
          Already joined? <Link to="/login">Login</Link>
        </Form.Item>
      </Form>
    );
  }
}
