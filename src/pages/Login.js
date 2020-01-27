import React from 'react';
import styled from 'styled-components';
import { Form } from 'antd';

import LoginForm from '../components/DataEntry/Forms/LoginForm';
import PageHeading from '../components/DataDisplay/Headings/PageHeading';
import SectionHeading from '../components/DataDisplay/Headings/SectionHeading';

export default function Login() {
  return (
    <Page className="page">
      <SectionHeading heading="Login" />
      <LoginForm />
    </Page>
  );
}

const Page = styled.div``;
