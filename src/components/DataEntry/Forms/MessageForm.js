import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Button, Form, Input } from "antd";

const { TextArea } = Input;

export default function MessageForm({ toUser }) {
  const [success, setSuccess] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of message form: ", values);

    axios({
      method: "POST",
      url: `${localStorage.getItem(
        "API_BASE_URL"
      )}/controllers/sendMessage.php`,
      data: {
        message: values.message,
        fromUser: Cookies.get("userID"),
        toUser: toUser
      }
    })
      .then((resp) => {
        // TODO: show success/fail message - currently it's silent!
        console.log(resp);
      })
      .then(() => form.resetFields())
      .catch((e) => console.error(e));
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item name="message" rules={[{ required: true }]}>
        <TextArea rows={6} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
