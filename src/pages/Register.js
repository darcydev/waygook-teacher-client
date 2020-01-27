import React from 'react';
import styled from 'styled-components';
import { Form } from 'antd';

import RegisterForm from '../components/DataEntry/Forms/RegisterForm';
import PageHeading from '../components/DataDisplay/Headings/PageHeading';

export default function Register() {
  const WrappedRegisterForm = Form.create({ name: 'login' })(RegisterForm);

  return (
    <Page className="page">
      <PageHeading heading="Register" />
      <WrappedRegisterForm />
    </Page>
  );
}

const Page = styled.div``;
