import React, { Component } from "react";
import styled from "styled-components";
import { Card, Icon, Avatar } from "antd";
import axios from "axios";

import PageHeading from "../components/DataDisplay/Headings/PageHeading";

const { Meta } = Card;

const dummyData = [
  {
    profileSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    flagSrc:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/100px-Flag_of_the_United_States.svg.png",
    name: "Michael Jackson"
  },
  {
    profileSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    flagSrc:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/100px-Flag_of_the_United_States.svg.png",
    name: "Michael Jackson"
  },
  {
    profileSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    flagSrc:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/100px-Flag_of_the_United_States.svg.png",
    name: "Michael Jackson"
  }
];

export default class Search extends Component {
  state = { profiles: [] };

  componentDidMount() {
    axios({
      method: "GET",
      url: "http://localhost:3002/users.php"
    }).then((response) => {
      console.log(response);
    });
  }

  onMessageClick = () => console.log("message button clicked");
  onProfileClick = () => console.log("profile button clicked");
  onBookingClick = () => console.log("booking button clicked");

  render() {
    const CARD_MARKUP = dummyData.map((v, i) => (
      <Card
        key={`${i}: ${v}`}
        style={{ width: 300, marginBottom: "20px" }}
        cover={<img alt="profile" src={v.profileSrc} />}
        actions={[
          <Icon type="message" key="message" onClick={this.onMessageClick} />,
          <Icon type="profile" key="profile" onClick={this.onProfileClick} />,
          <Icon type="calendar" key="calendar" onClick={this.onBookingClick} />
        ]}
      >
        <Meta avatar={<Avatar src={v.flagSrc} />} title={v.name} />
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

/* export default function Search({ data = dummyData }) {
  const CARD_MARKUP = data.map((v, i) => (
    <Card
      key={`${i}: ${v}`}
      style={{ width: 300, marginBottom: "20px" }}
      cover={<img alt="profile" src={v.profileSrc} />}
      actions={[
        <Icon type="message" key="message" onClick={onMessageClick} />,
        <Icon type="profile" key="profile" onClick={onProfileClick} />,
        <Icon type="calendar" key="calendar" onClick={onBookingClick} />
      ]}
    >
      <Meta avatar={<Avatar src={v.flagSrc} />} title={v.name} />
    </Card>
  ));

  // TODO: include filter functionality
  // TODO: load all profiles from the backend with role != loggedInUser's role

  return (
    <div className="page">
      <PageHeading heading="Search" subHeading="find your perfect teacher" />
      <FlexWrap>{CARD_MARKUP}</FlexWrap>
    </div>
  );
}

 */

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
