import React from "react";
import styled from "styled-components";

import RegisterForm from "../components/DataEntry/Forms/RegisterForm";
import PageHeading from "../components/DataDisplay/Headings/PageHeading";

export default function Register() {
  return (
    <Page className="page">
      <PageHeading heading="Register" />
      <RegisterForm />
    </Page>
  );
}

const Page = styled.div``;
