import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Row, Col, Card, Icon, Avatar, Layout } from "antd";

import PageHeading from "../components/DataDisplay/Headings/PageHeading";
import CollapseSideBar from "../sections/CollapseSideBar";

const { Content } = Layout;

const dummyData = [];

export default class Profile extends Component {
  state = {
    user: {},
    // the slug passed in the URL through Router
    slug: this.props.match.params.slug
  };

  componentDidMount() {
    this.fetchProfile(this.state.slug);
  }

  fetchProfile = (userID) => {
    axios({
      method: "POST",
      url: "http://localhost:3002/profile.php",
      data: { userID: userID },
      params: {
        userID
      }
    }).then((response) => {
      this.setState({ user: response.data });
    });
  };

  render() {
    //const data = this.state.users.length === 0 ? dummyData : this.state.users;

    console.log(this.state);

    const {
      first_name,
      last_name,
      profile_pic,
      description,
      role,
      gender,
      nationality,
      education_level,
      education_major,
      DOB,
      rate,
      skype_name,
      lesson_hours,
      rating,
      timezone
    } = this.state.user;

    return (
      <div className="page">
        <Layout>
          <CollapseSideBar slug={this.state.slug} />
          <Content className="content">
            <PageHeading
              heading="Profile"
              subHeading="find all profile details here"
            />
            <Row style={{ display: "flex" }}>
              <Col span={12}>
                <img
                  src={profile_pic}
                  alt="profile"
                  style={{ maxWidth: "350px" }}
                />
              </Col>
              <Col span={12}>
                <p>
                  Name: {first_name} {last_name}
                </p>
                <p>
                  <Avatar src={`images/flags/${nationality}-flag.png`} />
                </p>
              </Col>
            </Row>
            <Row>
              <DescriptionContainer>{description}</DescriptionContainer>
            </Row>
          </Content>
        </Layout>
      </div>
    );
  }
}

const ActionsContainer = styled.div`
  border: 5px solid green;
`;
const DescriptionContainer = styled.div``;
