import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Form, Input } from 'antd';
import { AlertOutlined, CheckCircleFilled } from '@ant-design/icons';
import styled from 'styled-components';

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

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ loading: true });

    this.props.form.validateFields((err, values) => {
      if (!err) this.login(values);
    });
  };

  render() {
    const { loggedIn } = this.state;
    const { getFieldDecorator } = this.props.form;

    const FORM_BUTTON_TEXT = () => {
      if (loggedIn) return <AlertOutlined />;
      else return 'Login';
    };

    return (
      <Container>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email'
                },
                {
                  required: true
                }
              ]
            })(<Input placeholder="Email" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true }]
            })(<Input type="password" placeholder="Password" />)}
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
