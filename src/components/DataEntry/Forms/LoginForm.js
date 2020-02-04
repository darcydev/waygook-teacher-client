import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { Form, Input } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";

import FormButton from "../../UI/FormButton";

export default function LoginForm() {
  // if already logged in, direct them to homepage
  if (Cookies.get("userID")) window.location.href = "/";

  const [success, setSuccess] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log("login form values:", values);

    form
      .validateFields()
      .then((values) => login(values))
      .catch((e) => console.error(e));
  };

  const login = (values) => {
    axios({
      method: "POST",
      url: `${localStorage.getItem("API_BASE_URL")}/controllers/login.php`,
      data: values
    }).then((response) => {
      console.log("login form response", response);

      if (response.data.success) {
        Cookies.set("email", values.email);
        Cookies.set("userID", response.data.userID.userID);
        setSuccess(true);
      }
    });
  };

  return (
    <Form form={form} onFinish={handleSubmit}>
      <Form.Item name="email" rules={[{ required: true }]}>
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true }]}>
        <Input type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <FormButton text={success ? <CheckCircleFilled /> : "Register"} />
        Not a member? <Link to="/register">Register</Link>
      </Form.Item>
    </Form>
  );
}
