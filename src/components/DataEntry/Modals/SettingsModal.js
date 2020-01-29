import React, { Component } from 'react';
import { Modal } from 'antd';
import { RocketFilled, SettingFilled } from '@ant-design/icons';

import SettingsForm from '../Forms/SettingsForm';

export default class SettingsModal extends Component {
  state = {
    visible: false
  };

  toggleModal = () => this.setState({ visible: !this.state.visible });

  render() {
    const { visible } = this.state;

    console.log(this.state);

    return (
      <>
        <SettingFilled onClick={this.toggleModal} />

        <Modal visible={visible} title="Settings" onCancel={this.toggleModal}>
          <SettingsForm />
        </Modal>
      </>
    );
  }
}
