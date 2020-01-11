import React from 'react';
import { Modal, Form, Input, Icon } from 'antd';
import axios from 'axios';
import Cookies from 'js-cookie';

import Conversation from '../../../DataDisplay/Comments/Conversation';

const { TextArea } = Input;

const MessageForm = Form.create({ name: 'message-form' })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const {
        visible,
        onCancel,
        onCreate,
        form,
        toUser,
        conversationData,
        usersData
      } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Conversation"
          okText={<Icon type="rocket" rotate={45} />}
          onCancel={onCancel}
          onOk={onCreate}
          toUser={toUser}
        >
          <Conversation data={conversationData} usersData={usersData} />
          <Form layout="vertical">
            <Form.Item>
              {getFieldDecorator('message', {
                rules: [
                  { required: true, message: 'Required' },
                  { max: 4999, message: 'must be less than 5000 characters' }
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
    visible: false,
    usersData: {}
  };

  componentDidMount() {
    this.fetchConversation();
  }

  showModal = () => this.setState({ visible: true });
  handleCancel = () => this.setState({ visible: false });
  saveFormRef = formRef => (this.formRef = formRef);
  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) return;

      console.log('Received values of message form: ', values);
      this.send(values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  fetchConversation() {
    axios({
      method: 'POST',
      url: 'http://localhost:3002/conversation.php',
      data: {
        fromUser: Cookies.get('email'),
        toUser: this.props.toUser
      }
    })
      .then(response => {
        // convert the two User's objects into a single object, with the
        // key being the userID and the values being the values
        // fetched from the db
        const usersObj = {};
        const id1 = response.data.thisUser.userID;
        const id2 = response.data.otherUser.userID;
        usersObj[id1] = response.data.thisUser;
        usersObj[id2] = response.data.otherUser;

        this.setState({
          conversationData: response.data.conversation,
          usersData: usersObj
        });
      })
      .catch(e => console.error(e));
  }

  send(values) {
    axios({
      method: 'POST',
      url: 'http://localhost:3002/sendMessage.php',
      data: {
        message: values.message,
        fromUser: Cookies.get('email'),
        toUser: this.props.toUser
      }
    }).then(response => {
      // TODO: show success/fail message - currently it's silent!
      console.log(response.data);
    });
  }

  render() {
    // console.log('Message State', this.state);

    return (
      <>
        <Icon type="message" onClick={this.showModal} />
        <span>Message</span>
        <MessageForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          toUser={this.props.toUser}
          conversationData={this.state.conversationData}
          usersData={this.state.usersData}
        />
      </>
    );
  }
}
