import React, { Component } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Row, Col, Icon, Avatar, Layout, Table } from 'antd';
import TimeAgo from 'react-timeago';

import CollapseSideBar from '../sections/CollapseSideBar';
import { MessageModalForm } from '../components/DataEntry/Forms/Modals/Message';

const { Content } = Layout;

export default class Inbox extends Component {
  state = {
    conversations: {},
    otherUserData: {}
  };

  componentDidMount() {
    // validate User isn't viewing another User's page
    if (this.props.match.params.slug !== Cookies.get('userID')) return;

    this.fetchConversations();
  }

  fetchConversations = () => {
    axios({
      method: 'POST',
      url: 'http://localhost:3002/inbox.php',
      data: { userEmail: Cookies.get('email') }
    }).then(response => {
      // create an object for each otherUser
      const otherUsersObj = response.data.otherUsers.reduce(
        (r, c) => (
          (r[c.userID] = {
            userID: c.userID,
            firstName: c.first_name,
            lastName: c.last_name,
            profilePic: c.profile_pic
          }),
          r
        ),
        {}
      );

      this.setState({
        conversations: response.data.conversations,
        otherUserData: otherUsersObj
      });
    });
  };

  render() {
    // console.log('Inbox State', this.state);

    const { conversations, otherUserData } = this.state;

    const LOADED_MARKUP = new Array(conversations.length);
    // TODO: include loading skeleton markup
    const LOADING_MARKUP = null;

    if (conversations.length) {
      conversations.map((v, i) => {
        const THIS_USER_ID = Cookies.get('userID');
        const OTHER_USER_ID =
          v.to_user_id === THIS_USER_ID ? v.from_user_id : v.to_user_id;

        LOADED_MARKUP[i] = {
          key: i,
          picture: otherUserData[OTHER_USER_ID].profilePic,
          name: otherUserData[OTHER_USER_ID].firstName,
          message: v.message_content,
          date: <TimeAgo date={v.date} />,
          action: <MessageModalForm toUser={OTHER_USER_ID} />
        };
      });
    }

    const DATA_MARKUP =
      conversations.length > 0 ? LOADED_MARKUP : LOADING_MARKUP;

    const COLUMNS = [
      {
        dataIndex: 'picture',
        key: 'picture',
        render: src => (
          <div className="img-thumbnail">
            <img src={src} alt="profile" />
          </div>
        )
      },
      {
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a> // TODO link to profile
      },
      {
        dataIndex: 'message',
        key: 'message'
      },
      {
        dataIndex: 'date',
        key: 'date'
      },
      {
        dataIndex: 'action',
        key: 'action'
      }
    ];

    return (
      <Container className="page">
        <Layout>
          <CollapseSideBar slug={this.props.match.params.slug} />
          <Content className="content">
            <Table columns={COLUMNS} dataSource={DATA_MARKUP} />
          </Content>
        </Layout>
      </Container>
    );
  }
}

const Container = styled.div``;
