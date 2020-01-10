import React from "react";
import { Modal, Form, Input, Icon } from "antd";
import axios from "axios";
import Cookies from "js-cookie";

const { TextArea } = Input;

const MessageForm = Form.create({ name: "message-form" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Send a message"
          okText={<Icon type="rocket" rotate={45} />}
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item>
              {getFieldDecorator("message", {
                rules: [
                  { required: true, message: "Required" },
                  { max: 4999, message: "must be less than 5000 characters" }
                ]
              })(<TextArea rows={6} />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

export class MessageModalForm extends React.Component {
  state = {
    visible: false
  };

  showModal = () => this.setState({ visible: true });
  handleCancel = () => this.setState({ visible: false });
  saveFormRef = (formRef) => (this.formRef = formRef);
  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) return;

      console.log("Received values of message form: ", values);
      this.send(values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  send(values) {
    axios({
      method: "POST",
      url: "http://localhost:3002/sendMessage.php",
      data: { message: values.message, fromUser: Cookies.get("email") }
    }).then((response) => {
      console.log(response);
    });
  }

  render() {
    return (
      <>
        <Icon type="message" onClick={this.showModal} />
        <span>Message</span>
        <MessageForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </>
    );
  }
}
