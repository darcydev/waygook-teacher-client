import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import styled from 'styled-components';
import { Form, Input, Select } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';

import FormButton from '../../UI/FormButton';

const { Option } = Select;

export default class RegisterForm extends Component {
  state = {
    loading: false,
    success: false
  };

  componentDidMount() {
    if (Cookies.get('userID')) window.location.href = '/';
  }

  handleSubmit = values => {
    this.setState({ loading: true });
    this.register(values);
  };

  register(values) {
    axios({
      method: 'POST',
      url: `${localStorage.getItem('API_BASE_URL')}/controllers/register.php`,
      data: values
    })
      .then(response => {
        if (response.data.success) {
          Cookies.set('email', values.email);
          Cookies.set('userID', response.data.userID);
          this.setState({ success: true });
          window.location.href = '/';
        }
      })
      .catch(e => console.log(e));
  }

  render() {
    const BUTTON_TEXT = this.state.success ? <CheckCircleFilled /> : 'Register';

    return (
      <Form onFinish={this.handleSubmit} className="register-form">
        <Form.Item name="first" rules={[{ required: true }]} hasFeedback>
          <Input placeholder="First name" />
        </Form.Item>
        <Form.Item name="last" rules={[{ required: true }]} hasFeedback>
          <Input placeholder="Last name" />
        </Form.Item>
        <Form.Item name="email" rules={[{ type: 'email', required: true }]}>
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
        <Form.Item name="role" rules={[{ required: true }]} hasFeedback>
          <Select>
            <Option value="teacher">Teacher</Option>
            <Option value="student">Student</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <FormButton text={BUTTON_TEXT} styles={{ minWidth: '30px' }} />
          <br />
          Already joined? <Link to="/login">Login</Link>
        </Form.Item>
      </Form>
    );
  }
}

const Container = styled.div``;
