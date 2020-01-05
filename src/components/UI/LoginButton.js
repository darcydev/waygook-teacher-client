import React, { Component } from 'react';
import styled from 'styled-components';
import { Modal, Form } from 'antd';

import SimpleButton from './SimpleButton';
import LoginForm from '../DataEntry/LoginForm';
import RegisterForm from '../DataEntry/RegisterForm';

export default class LoginButton extends Component {
  state = { visible: false, form: 'login' };

  onShowModal = () => this.setState({ visible: true });
  onCancelModal = () => this.setState({ visible: false });
  onOk = () => 10;

  render() {
    const WrappedLoginForm = Form.create({ name: 'login' })(LoginForm);

    const WHICH_FORM_MARKUP =
      this.state.form === 'login' ? <WrappedLoginForm /> : null;

    return (
      <Container>
        <ButtonContainer onClick={this.onShowModal}>
          <SimpleButton text="Login" size="default" />
        </ButtonContainer>
        <Modal
          title="Login"
          visible={this.state.visible}
          onOk={this.onOk}
          onCancel={this.onCancelModal}
        >
          {WHICH_FORM_MARKUP}
        </Modal>
      </Container>
    );
  }
}

const Container = styled.div``;
const ButtonContainer = styled.div``;
