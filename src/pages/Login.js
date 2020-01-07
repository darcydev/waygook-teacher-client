import React from "react";
import styled from "styled-components";
import { Form } from "antd";

import LoginForm from "../components/DataEntry/LoginForm";

export default function Login() {
  const WrappedLoginForm = Form.create({ name: "login" })(LoginForm);

  return (
    <Container className="container">
      <WrappedLoginForm />
    </Container>
  );
}

const Container = styled.div``;
