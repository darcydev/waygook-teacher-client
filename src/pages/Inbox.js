import React, { Component } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import axios from "axios";
import Cookies from "js-cookie";
import { Row, Col, Icon, Avatar, Layout, Table } from "antd";

import CollapseSideBar from "../sections/CollapseSideBar";
import { MessageModalForm } from "../components/DataEntry/Forms/Modals/Message";

const { Content } = Layout;

export default class Inbox extends Component {
  state = {
    conversations: {}
  };

  componentDidMount() {
    // validate User isn't viewing another User's page
    if (this.props.match.params.slug !== Cookies.get("userID")) return;

    this.fetchConversations();
  }

  fetchConversations = () => {
    axios({
      method: "POST",
      url: "http://localhost:3002/inbox.php",
      data: { userEmail: Cookies.get("email") }
    }).then((response) => {
      this.setState({ conversations: response.data });
    });
  };

  render() {
    console.log("Inbox State", this.state);

    // init the data
    const DATA = new Array(this.state.conversations.length);

    // TODO: include loading skeleton markup
    const LOADING_MARKUP = null;

    const DATA_MARKUP =
      this.state.conversations.length > 0
        ? this.state.conversations.map(
            (v, i) =>
              (DATA[i] = {
                key: i,
                name: v.to_user_id,
                message: v.message_content,
                date: v.date,
                action: <MessageModalForm toUser={v.to_user_id} />
              })
          )
        : LOADING_MARKUP;

    const COLUMNS = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (text) => <a>{text}</a>
      },
      {
        title: "Message",
        dataIndex: "message",
        key: "message"
      },
      {
        title: "Date",
        dataIndex: "date",
        key: "date"
      },
      {
        title: "Action",
        dataIndex: "action",
        key: "action"
      }
    ];

    return (
      <Container className="page">
        <Layout>
          <CollapseSideBar slug={this.props.match.params.slug} />
          <Content className="content">
            <Row>
              <Table columns={COLUMNS} dataSource={DATA_MARKUP} />
            </Row>
            <Row></Row>
          </Content>
        </Layout>
      </Container>
    );
  }
}

const Container = styled.div`
  .row-first {
    display: flex;

    ${media.lessThan("small")`
      flex-direction: column;
      align-items: center;
      text-align: center;
    `}

    img {
      border-radius: 10px;
    }
  }
`;

const DescriptionContainer = styled.div``;
