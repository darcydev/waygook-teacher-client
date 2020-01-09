import React, { Component } from "react";
import { Modal, Button } from "antd";

export default function SimpleModal({
  title = "Default Title",
  visible = false,
  text = "Default Modal Content"
}) {
  return (
    <Modal title="Title" visible={visible} onCancel={(visible = false)}>
      <p>{text}</p>
    </Modal>
  );
}

/* 
export default class SimpleModal extends Component {
  state = {
    ModalText: "Content of the modal",
    visible: false,
    confirmLoading: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: "The modal will be closed after two seconds",
      confirmLoading: true
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      visible: false
    });
  };

  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <Modal
        title="Title"
        visible={visible}
        onOk={this.handleOk}
        confirmLoading={confirmLoading}
        onCancel={this.handleCancel}
      >
        <p>{ModalText}</p>
      </Modal>
    );
  }
}
 */
