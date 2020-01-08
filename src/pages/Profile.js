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

export default class Profile extends Component {
  state = { user: {} };

  componentDidMount() {
    this.fetchProfile();
  }

  fetchProfile = () => {
    axios({
      method: "GET",
      url: "http://localhost:3002/users.php"
    }).then((response) => {
      console.log(response);
    });
  };

  render() {
    //const data = this.state.users.length === 0 ? dummyData : this.state.users;

    return (
      <div className="page">
        <PageHeading heading="Profile" subHeading="specific profile details" />
        <div className="content">hey baby</div>
      </div>
    );
  }
}

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
