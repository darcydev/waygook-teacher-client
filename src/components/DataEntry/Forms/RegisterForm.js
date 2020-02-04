import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { Form, Input, Select } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";

import FormButton from "../../UI/FormButton";

const { Option } = Select;

export default function RegisterForm() {
  // if already logged in, direct them to homepage
  if (Cookies.get("userID")) window.location.href = "/";

  const [success, setSuccess] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log("register form values:", values);

    form
      .validateFields()
      .then((values) => register(values))
      .catch((e) => console.error(e));
  };

  const register = (values) => {
    axios({
      method: "POST",
      url: `${localStorage.getItem("API_BASE_URL")}/controllers/register.php`,
      data: values
    })
      .then((response) => {
        if (response.data.success) {
          Cookies.set("email", values.email);
          Cookies.set("userID", response.data.userID.userID);
          setSuccess(true);
          window.location.href = "/";
        }
      })
      .catch((e) => console.error(e));
  };

  return (
    <Form form={form} onFinish={handleSubmit}>
      <Form.Item name="first" rules={[{ required: true }]}>
        <Input placeholder="First name" />
      </Form.Item>
      <Form.Item name="last" rules={[{ required: true }]}>
        <Input placeholder="Last name" />
      </Form.Item>
      <Form.Item name="email" rules={[{ type: "email", required: true }]}>
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true }]}>
        <Input type="password" placeholder="Password" />
      </Form.Item>
      {/* TODO: include a confirm password client-side validation */}
      <Form.Item name="confirm" rules={[{ required: true }]}>
        <Input type="password" placeholder="Confirm password" />
      </Form.Item>
      <Form.Item name="role" rules={[{ required: true }]}>
        <Select>
          <Option value="teacher">Teacher</Option>
          <Option value="student">Student</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <FormButton text={success ? <CheckCircleFilled /> : "Register"} />
        <br />
        Already joined? <Link to="/login">Login</Link>
      </Form.Item>
    </Form>
  );
}

/* export default class RegisterForm extends Component {
  state = {
    success: false
  };

  componentDidMount() {
    if (Cookies.get("userID")) window.location.href = "/";
  }

  [form] = Form.useForm();

  handleSubmit = (e) => {
    e.preventDefault();

    form.validateFields().then((values) => {
      this.register(values);
    });

  };

  register(values) {
    axios({
      method: "POST",
      url: `${localStorage.getItem("API_BASE_URL")}/controllers/register.php`,
      data: values
    })
      .then((response) => {
        if (response.data.success) {
          Cookies.set("email", values.email);
          Cookies.set("userID", response.data.userID);
          this.setState({ success: true });
          window.location.href = "/";
        }
      })
      .catch((e) => console.log(e));
  }

  render() {
    const { success } = this.state;

    const BUTTON_TEXT = success ? <CheckCircleFilled /> : "Register";

    return (
      <Form onFinish={this.handleSubmit}>
        <Form.Item name="first" rules={[{ required: true }]}>
          <Input placeholder="First name" />
        </Form.Item>
        <Form.Item name="last" rules={[{ required: true }]}>
          <Input placeholder="Last name" />
        </Form.Item>
        <Form.Item name="email" rules={[{ type: "email", required: true }]}>
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true }]}>
          <Input type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item
          name="confirm"
          rules={[{ required: true, validator: this.compareToFirstPassword }]}
        >
          <Input type="password" placeholder="Confirm password" />
        </Form.Item>
        <Form.Item name="role" rules={[{ required: true }]}>
          <Select>
            <Option value="teacher">Teacher</Option>
            <Option value="student">Student</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <FormButton text={BUTTON_TEXT} styles={{ minWidth: "30px" }} />
          <br />
          Already joined? <Link to="/login">Login</Link>
        </Form.Item>
      </Form>
    );
  }
}

 */
