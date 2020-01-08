import React, { Component } from "react";
import styled from "styled-components";
import { Card, Icon, Avatar } from "antd";
import axios from "axios";

import PageHeading from "../components/DataDisplay/Headings/PageHeading";

const { Meta } = Card;

const dummyData = [
  {
    userID: -1,
    profile_pic:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    flagSrc:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/100px-Flag_of_the_United_States.svg.png",
    first_name: "Michael Douglas"
  },
  {
    userID: -2,
    profile_pic:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    flagSrc:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/100px-Flag_of_the_United_States.svg.png",
    first_name: "Michael Douglas"
  },
  {
    userID: -3,
    profile_pic:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    flagSrc: "images/flags/american-flag.png",
    first_name: "Michael Douglas"
  }
];

export default class Search extends Component {
  state = { users: [] };

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    axios({
      method: "GET",
      url: "http://localhost:3002/users.php"
    }).then((response) => {
      console.log(response);

      this.setState({ users: response.data });
    });
  };

  onMessageClick = (userID) => console.log("message button clicked", userID);
  onProfileClick = (userID) => console.log("profile button clicked", userID);
  onBookingClick = (userID) => console.log("booking button clicked", userID);

  render() {
    const data = this.state.users.length === 0 ? dummyData : this.state.users;

    const CARD_MARKUP = data.map((v, i) => (
      <Card
        key={v.userID === undefined ? `${i}: ${v}` : v.userID}
        style={{ width: 300, marginBottom: "20px" }}
        cover={<img alt="profile" src={v.profile_pic} />}
        actions={[
          <Icon
            type="message"
            key="message"
            onClick={this.onMessageClick(v.userID)}
          />,
          <Icon
            type="profile"
            key="profile"
            onClick={this.onProfileClick(v.userID)}
          />,
          <Icon
            type="calendar"
            key="calendar"
            onClick={this.onBookingClick(v.userID)}
          />
        ]}
      >
        <Meta
          avatar={<Avatar src={`images/flags/${v.nationality}-flag.png`} />}
          title={v.first_name}
        />
      </Card>
    ));

    return (
      <div className="page">
        <PageHeading heading="Search" subHeading="find your perfect teacher" />
        <FlexWrap>{CARD_MARKUP}</FlexWrap>
      </div>
    );
  }
}

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
