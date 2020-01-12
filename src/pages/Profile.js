import React, { Component } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Row, Col, Card, Icon, Avatar, Layout, Rate, Statistic } from 'antd';

import PageHeading from '../components/DataDisplay/Headings/PageHeading';
import IconWithText from '../components/DataDisplay/IconWithText';

import CollapseSideBar from '../sections/CollapseSideBar';

const { Content } = Layout;
const { Meta } = Card;

export default class Profile extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    // the slug passed in the URL through Router
    this.fetchProfile(this.props.match.params.slug);
  }

  fetchProfile = userID => {
    axios({
      method: 'POST',
      url: `${localStorage.getItem('API_BASE_URL')}/profile.php`,
      data: { userID: userID },
      params: {
        userID
      }
    }).then(response => {
      this.setState({ user: response.data });
    });
  };

  render() {
    // console.log('Profile State', this.state);

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

    const ROUNDED_RATING = Math.round(rating * 2) / 2;

    const CARD_DESCRIPTION_MARKUP = (
      <ul style={{ margin: 0, padding: 0 }}>
        <Statistic
          title="Education Level"
          value={education_level}
          prefix={<Icon type="question" />}
        />
        <Statistic title="Rate" value={rate} prefix={<Icon type="dollar" />} />
        <Statistic
          title="Lessons"
          value={lesson_hours}
          prefix={<Icon type="dollar" />}
        />
        <Statistic
          title="Timezone"
          value={timezone}
          prefix={<Icon type="home" />}
        />
        <Rate disabled allowHalf={true} defaultValue={4.5} />
      </ul>
    );

    return (
      <Container className="page">
        <Layout>
          <CollapseSideBar slug={this.props.match.params.slug} />
          <Content className="content">
            <Row className="row-first">
              <Col style={{ maxWidth: '100%' }}>
                <Card
                  className="img-md img-responsive"
                  style={{ width: 300, marginBottom: '20px', maxWidth: '100%' }}
                  cover={<img src={profile_pic} alt="profile" />}
                >
                  <Meta
                    avatar={
                      <Avatar src={`images/flags/${nationality}-flag.png`} />
                    }
                    title={`${first_name} ${last_name}`}
                    description={CARD_DESCRIPTION_MARKUP}
                  />
                </Card>
              </Col>
              <Col style={{ maxWidth: '100%' }}>{description}</Col>
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

    ${media.lessThan('small')`
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
