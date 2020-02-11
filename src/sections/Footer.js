import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { Row, Col, Avatar, Typography } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  CompassOutlined
} from "@ant-design/icons";

import Logo from "../components/Graphics/Logos/Logo";
import SimpleList from "../components/DataDisplay/Lists/SimpleList";
import SimpleButton from "../components/UI/SimpleButton";
import NavBar from "../components/Navigation/NavBar";

const { Title, Text } = Typography;

export default function Footer({
  id = undefined,
  classes = undefined,
  contactDetails = defaultContactDetails
}) {
  return (
    <Container id={id} className={classes}>
      <Row gutter={[0, 24]}>
        <Col md={10} sm={24}>
          <Title level={4}>WaygookTeacher © 2019</Title>
          <Logo />
        </Col>
        <Col md={6} sm={12}>
          <SimpleList light={true} data={contactDetails} />
        </Col>
        <Col md={8} sm={24}>
          <Title level={3}>About the company</Title>
          <Text>
            WaygookTeacher brings together expert native English teachers with
            Korean language-learners. The platform creates the most successful
            approach to high-quality learning.
          </Text>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <NavBar />
        </Col>
      </Row>
    </Container>
  );
}

// STYLES
const Container = styled.div`
  text-align: center;
  color: white;
  background-color: #001529;
  padding-top: 30px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span {
    color: var(--txt-head-light);
  }

  .ant-list-item-meta-description {
    font-size: 14px;
  }

  ${media.lessThan("medium")`
    .ant-row {
      display: flex;
      flex-direction: column;
      align-items: center;

      .ant-col-8 {
        width: 66%;
      }
    }
  `}
`;

// DEFAULT CONTENT
const defaultContactDetails = [
  {
    icon: (
      <Avatar
        style={{ color: "black", backgroundColor: "white" }}
        size="small"
        icon={<PhoneOutlined />}
      />
    ),
    content: "+123 456 789"
  },
  {
    icon: (
      <Avatar style={{ color: "black" }} size="small" icon={<MailOutlined />} />
    ),
    content: "fake@gmail.com"
  },
  {
    icon: (
      <Avatar
        style={{ color: "black", backgroundColor: "white" }}
        size="small"
        icon={<CompassOutlined />}
      />
    ),
    content: "123 Fake Street, Fakeville Fakecountry"
  }
];
