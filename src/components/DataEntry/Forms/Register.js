import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Form, Input, Select, Icon } from 'antd';
import Cookies from 'js-cookie';
import styled from 'styled-components';

import FormButton from '../../UI/FormButton';

const { Option } = Select;

export default class Register extends Component {
  state = {
    loading: false,
    success: false
  };

  componentDidMount() {
    if (Cookies.get('userID')) window.location.href = '/';
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });
    this.props.form.validateFields((err, values) => {
      if (!err) this.register(values);
    });
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
    const { getFieldDecorator } = this.props.form;

    const BUTTON_TEXT = this.state.success ? (
      <Icon type="check-circle" />
    ) : (
      'Register'
    );

    return (
      <Form onSubmit={this.handleSubmit} className="register-form">
        <Form.Item hasFeedback>
          {getFieldDecorator('first', {
            rules: [
              {
                required: true,
                message: 'Required'
              }
            ]
          })(<Input placeholder="First name" />)}
        </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator('last', {
            rules: [
              {
                required: true,
                message: 'Required'
              }
            ]
          })(<Input placeholder="Last name" />)}
        </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'Invalid format'
              },
              {
                required: true,
                message: 'Required'
              }
            ]
          })(<Input placeholder="Email" />)}
        </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Required'
              },
              {
                validator: this.validateToNextPassword
              }
            ]
          })(<Input.Password placeholder="Password" />)}
        </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Required'
              },
              {
                validator: this.compareToFirstPassword
              }
            ]
          })(<Input.Password placeholder="Confirm" />)}
        </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator('role', {
            rules: [
              {
                required: true,
                message: 'Required'
              }
            ]
          })(
            <Select>
              <Option value="teacher">Teacher</Option>
              <Option value="student">Student</Option>
            </Select>
          )}
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
