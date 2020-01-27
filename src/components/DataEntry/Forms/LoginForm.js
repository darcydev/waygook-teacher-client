import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import styled from 'styled-components';
import { Form, Input } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';

import FormButton from '../../UI/FormButton';

import { checkUserLoggedIn } from '../../../data/login';

export default class LoginForm extends Component {
  state = {
    loading: false,
    success: false,
    loggedIn: checkUserLoggedIn()
  };

  login(values) {
    axios({
      method: 'POST',
      url: `${localStorage.getItem('API_BASE_URL')}/controllers/login.php`,
      data: values
    }).then(response => {
      if (!response.data.success)
        this.setState({ success: false, loggedIn: false });
      else if (response.data.success) {
        Cookies.set('email', values.email);
        Cookies.set('userID', response.data.userID.userID);
        this.setState({ success: true, loggedIn: true });

        window.location.href = '/';
      }
    });
  }

  handleSubmit = values => {
    this.setState({ loading: true });
    this.login(values);
  };

  render() {
    const { loggedIn } = this.state;

    const FORM_BUTTON_TEXT = () => (loggedIn ? <CheckCircleFilled /> : 'Login');

    return (
      <Container>
        <Form onFinish={this.handleSubmit} className="login-form">
          <Form.Item name="email" rules={[{ type: 'email', required: true }]}>
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true }]}>
            <Input type="password" placeholder="Email" />
          </Form.Item>
          <Form.Item>
            <FormButton
              text={FORM_BUTTON_TEXT()}
              styles={{ minWidth: '30px' }}
            />
            Not a member? <Link to="/register">Register</Link>
          </Form.Item>
        </Form>
      </Container>
    );
  }
}

const Container = styled.div``;
