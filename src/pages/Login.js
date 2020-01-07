import React from "react";
import styled from "styled-components";
import { Form } from "antd";

import LoginForm from "../components/DataEntry/LoginForm";
import PageHeading from "../components/DataDisplay/Headings/PageHeading";

export default function Login() {
  const WrappedLoginForm = Form.create({ name: "login" })(LoginForm);

  return (
    <Page className="page">
      <PageHeading heading="Login" />
      <WrappedLoginForm />
    </Page>
  );
}

const Page = styled.div``;
