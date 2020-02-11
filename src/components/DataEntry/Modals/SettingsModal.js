import React, { Component } from "react";
import { Modal } from "antd";
import { RocketFilled, SettingFilled } from "@ant-design/icons";

import SettingsForm from "../Forms/SettingsForm";

export default class SettingsModal extends Component {
  state = {
    visible: false
  };

  toggleModal = () => this.setState({ visible: !this.state.visible });

  render() {
    // console.log("Settings Modal State: ", this.state);

    const { visible } = this.state;

    return (
      <>
        <SettingFilled onClick={this.toggleModal} />

        <Modal
          visible={visible}
          title="Settings"
          onCancel={this.toggleModal}
          onOk={this.toggleModal}
        >
          <SettingsForm />
        </Modal>
      </>
    );
  }
}
