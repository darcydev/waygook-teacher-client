/* ANTD V4 */

import React from 'react';
import { Form, Input } from 'antd';
import axios from 'axios';

const { TextArea } = Input;

export default function MessageForm() {
  const onFinish = values => {
    console.log('Received values of message form: ', values);

    axios({
      method: 'POST',
      url: `${localStorage.getItem(
        'API_BASE_URL'
      )}/controllers/sendMessage.php`,
      data: {
        message: values.message,
        fromUser: Cookies.get('email'),
        toUser: this.props.toUser
      }
    })
      .then(response => {
        // TODO: show success/fail message - currently it's silent!
      })
      .then(() => form.resetFields())
      .catch(e => console.error(e));
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item name="message" rules={[{ required: true }]}>
        <TextArea rows={6} />
      </Form.Item>
    </Form>
  );
}
