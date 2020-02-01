import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Modal } from 'antd';
import { MessageFilled, RocketFilled } from '@ant-design/icons';

import MessageForm from '../Forms/MessageForm';
import Conversation from '../../DataDisplay/Comments/Conversation';

export default class MessageModal extends Component {
  state = {
    visible: false,
    usersData: {}
  };

  toggleModal = () => this.setState({ visible: !this.state.visible });

  componentDidMount() {
    this.fetchConversation();
  }

  showModal = () => this.setState({ visible: true });
  handleCancel = () => this.setState({ visible: false });

  fetchConversation() {
    axios({
      method: 'POST',
      url: `${localStorage.getItem(
        'API_BASE_URL'
      )}/controllers/conversation.php`,
      data: {
        thisUserID: Cookies.get('userID'),
        otherUserID: this.props.toUser
      }
    })
      .then(response => {
        console.log('Message API response', response);

        // convert the two User's objects into a single object, with the
        // key being the userID and the values being the values
        // fetched from the db
        const userIDs = {};
        const id1 = response.data.thisUser.userID;
        const id2 = response.data.otherUser.userID;
        userIDs[id1] = response.data.thisUser;
        userIDs[id2] = response.data.otherUser;

        this.setState({
          conversationData: response.data.conversation,
          usersData: userIDs
        });
      })
      .catch(e => console.error(e));
  }

  render() {
    // console.log('Message State', this.state);

    const { toUser } = this.props;
    const { visible, conversationData, usersData } = this.state;

    return (
      <>
        <MessageFilled onClick={this.toggleModal} />

        <Modal
          visible={visible}
          title="Conversation"
          okText={<RocketFilled />}
          onCancel={this.toggleModal}
          onOk={this.toggleModal}
        >
          <Conversation data={conversationData} usersData={usersData} />
          <MessageForm toUser={toUser} />
        </Modal>
      </>
    );
  }
}

/* 
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
      url: `${localStorage.getItem(
        'API_BASE_URL'
      )}/controllers/conversation.php`,
      data: {
        thisUserID: Cookies.get('userID'),
        otherUserID: this.props.toUser
      }
    })
      .then(response => {
        console.log('Message API response', response);

        // convert the two User's objects into a single object, with the
        // key being the userID and the values being the values
        // fetched from the db
        const userIDs = {};
        const id1 = response.data.thisUser.userID;
        const id2 = response.data.otherUser.userID;
        userIDs[id1] = response.data.thisUser;
        userIDs[id2] = response.data.otherUser;

        this.setState({
          conversationData: response.data.conversation,
          usersData: userIDs
        });
      })
      .catch(e => console.error(e));
  }

  send(values) {
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
    }).then(response => {
      // TODO: show success/fail message - currently it's silent!
      console.log(response.data);
    });
  }

  render() {
    console.log('Message State', this.state);

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
} */
