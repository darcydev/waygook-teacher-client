import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Modal } from 'antd';
import { RocketFilled, MessageFilled } from '@ant-design/icons';

import MessageForm from '../Forms/MessageForm';
import Conversation from '../../DataDisplay/Comments/Conversation';

export default class MessageModal extends Component {
  state = {
    visible: false,
    conversationData: {},
    usersData: {}
  };

  toggleModal = () => this.setState({ visible: !this.state.visible });

  componentDidMount() {
    this.fetchConversation();
  }

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
