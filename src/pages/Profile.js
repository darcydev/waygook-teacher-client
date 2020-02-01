import React, { Component } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import axios from 'axios';
import Cookies from 'js-cookie';
import {
  Button,
  Row,
  Col,
  Card,
  Avatar,
  Layout,
  Rate,
  Statistic,
  Typography
} from 'antd';
import {
  QuestionCircleFilled,
  DollarCircleFilled,
  HomeFilled
} from '@ant-design/icons';

import CollapseSideBar from '../sections/CollapseSideBar';
import Banner from '../sections/Banner';

const { Content } = Layout;
const { Meta } = Card;
const { Text, Title } = Typography;

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
      url: `${localStorage.getItem('API_BASE_URL')}/controllers/profile.php`,
      data: { userID: userID }
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
          prefix={<QuestionCircleFilled />}
        />
        <Statistic title="Rate" value={rate} prefix={<DollarCircleFilled />} />
        <Statistic
          title="Lessons"
          value={lesson_hours}
          prefix={<DollarCircleFilled />}
        />
        <Statistic title="Timezone" value={timezone} prefix={<HomeFilled />} />
        <Rate disabled allowHalf={true} defaultValue={ROUNDED_RATING} />
      </ul>
    );

    return (
      <Container className="page">
        <Layout>
          <CollapseSideBar slug={this.props.match.params.slug} />
          <Content className="content" style={{ overflowX: 'visible' }}>
            <Row display="flex">
              <Col md={12} sm={24}>
                <StyledCard
                  cover={
                    <img
                      src={profile_pic}
                      className="img-md img-responsive"
                      alt="profile"
                    />
                  }
                >
                  <Meta
                    avatar={
                      <Avatar src={`images/flags/${nationality}-flag.png`} />
                    }
                    title={`${first_name} ${last_name}`}
                    description={CARD_DESCRIPTION_MARKUP}
                  />
                </StyledCard>
              </Col>
              <Col md={12} sm={24}>
                <Title level={3}>Description</Title>
                <Text>{description ? description : 'Default text here'}</Text>
              </Col>
            </Row>
            <Row>
              <Banner />
              <Title level={3}>Reviews</Title>
            </Row>
          </Content>
        </Layout>
      </Container>
    );
  }
}

const Container = styled.div``;

const StyledCard = styled(Card)`
  width: 300px;
  margin-bottom: 20px;
  max-width: 100%;
`;
