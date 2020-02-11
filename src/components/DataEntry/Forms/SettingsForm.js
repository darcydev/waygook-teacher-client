import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Form, Input, AutoComplete, Button, Upload } from "antd";
import { CheckCircleFilled, UploadOutlined } from "@ant-design/icons";

import FormButton from "../../UI/FormButton";

const AutoCompleteOption = AutoComplete.Option;

export default function SettingsForm() {
  const [success, setSuccess] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log("settings form values:", values);

    form
      .validateFields()
      .then((values) => updateSettings(values))
      .catch((e) => console.error(e));
  };

  const normFile = (e) => {
    console.log("Upload event:", e);

    return Array.isArray(e) ? e : e && e.fileList;
  };

  const updateSettings = (values) => {
    console.log(values);

    // TODO update settings in db
  };

  return (
    <Form form={form} onFinish={handleSubmit}>
      <Form.Item
        name="profile"
        label="Profile Picture"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload
          name="profile"
          action={`${localStorage.getItem(
            "API_BASE_URL"
          )}/controllers/uploadImage.php`}
          listType="picture"
        >
          <Button>
            <UploadOutlined /> Click to upload
          </Button>
        </Upload>
      </Form.Item>
      <Form.Item>
        <FormButton text={success ? <CheckCircleFilled /> : "Update"} />
      </Form.Item>
    </Form>
  );
}

{
  /* <Form onFinish={onFinish}>
        <Form.Item
          name="timezone"
          rules={[
            { required: tzInvalid, message: 'Please enter a valid timezone' }
          ]}
        >
          <AutoComplete
            options={tzOptions()}
            onChange={onCityChange}
            placeholder="What's your city?"
          >
            <Input />
          </AutoComplete>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form> */
}
