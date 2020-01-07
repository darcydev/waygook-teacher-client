import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Form, Input } from "antd";

import FormButton from "../UI/FormButton";

// TODO.. test whether it is possible to use a stateless component
// and simply pass the 'values' from the Ant form as opposed to using
// state
export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loggedIn: false
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

        this.setState({ loggedIn: true });
      } else if (response.data.status === "fail") {
        alert("Failed to log in");
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);

        this.setState(
          {
            username: values.email,
            password: values.password
          },
          () => this.login()
        );
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "The input is not valid E-mail!"
              },
              {
                required: true,
                message: "Please input your E-mail!"
              }
            ]
          })(<Input placeholder="Email" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true }]
          })(<Input type="password" placeholder="Password" />)}
        </Form.Item>
        <Form.Item>
          <FormButton text="Login" />
          Not a member? <Link to="/register">Register</Link>
        </Form.Item>
      </Form>
    );
  }
}
