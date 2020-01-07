import React from "react";
import styled from "styled-components";
import { Card, Icon, Avatar } from "antd";

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
    name: "Michael Jordan"
  }
];

const onMessageClick = () => console.log("message button clicked");
const onProfileClick = () => console.log("profile button clicked");
const onBookingClick = () => console.log("booking button clicked");

export default function Search({ data = dummyData }) {
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

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
