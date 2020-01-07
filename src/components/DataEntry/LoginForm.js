import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { Form, Input } from "antd";

import FormButton from "../UI/FormButton";

export default class LoginForm extends Component {
  login(values) {
    axios({
      method: "POST",
      url: "http://localhost:3002/login.php",
      data: values
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Logged in!");

        Cookies.set("email", values.email);
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

        this.login(values);
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
                type: "email"
              },
              {
                required: true
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
