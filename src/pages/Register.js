import React from "react";
import styled from "styled-components";
import { Form } from "antd";

import RegisterForm from "../components/DataEntry/RegisterForm";

export default function Register() {
  const WrappedRegisterForm = Form.create({ name: "login" })(RegisterForm);

  return (
    <Container className="container">
      <WrappedRegisterForm />
    </Container>
  );
}

const Container = styled.div``;
