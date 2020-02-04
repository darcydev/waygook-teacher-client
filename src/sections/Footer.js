import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { Row, Col, Avatar, Typography } from "antd";

import Logo from "../components/Graphics/Logos/Logo";
import SimpleList from "../components/DataDisplay/Lists/SimpleList";
import SimpleButton from "../components/UI/SimpleButton";

const { Title, Text } = Typography;

export default function Footer({
  id = undefined,
  classes = undefined,
  logo = <Logo />,
  companyName = "Fake Company Name",
  companyYear = "2019",
  aboutCompanyText = "Cillum qui non laborum laboris",
  navLinks = defaultNavLinks,
  registration = defaultRegistration,
  contactDetails = defaultContactDetails
}) {
  const NAV_LINKS_MARKUP = navLinks.map((v) => (
    <SimpleButton type="link" text={v.title} href={v.link} />
  ));

  const REGISTRATION_MARKUP = registration.map((v, i) => (
    <li
      key={`${i}: ${v.number}`}
      style={{ padding: "2px 0" }}
    >{`${v.name} (${v.location}) #${v.number}`}</li>
  ));

  return (
    <Container id={id} className={classes}>
      <Row gutter={[0, 24]}>
        <Col md={10} sm={24}>
          <Title level={4}>
            {companyName} © {companyYear}
          </Title>
          <ListContainer>{REGISTRATION_MARKUP}</ListContainer>
          <LogoContainer>
            <Logo />
          </LogoContainer>
        </Col>
        <Col md={6} sm={12}>
          <SimpleList light={true} data={contactDetails} />
        </Col>
        <Col md={8} sm={24}>
          <Title level={3}>About the company</Title>
          <Text>{aboutCompanyText}</Text>
        </Col>
      </Row>
      <Row>
        <Col span={24}>{NAV_LINKS_MARKUP}</Col>
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
  h6 {
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

const LogoContainer = styled.div``;
const ListContainer = styled.div`
  color: #697a95;
  list-style: none;
  padding: 10px 0;
`;

// DEFAULT DATA
const defaultNavLinks = [
  {
    title: "About Us",
    link: "https://google.com"
  },
  { title: "More About Us", link: "https://google.com" }
];

const defaultRegistration = [
  {
    name: "Company Name Ltd",
    location: "Seychelles",
    number: "202804"
  }
];

const defaultContactDetails = [
  {
    icon: (
      <Avatar style={{ backgroundColor: "orange" }} size="small" icon="phone" />
    ),
    content: "+123 456 789"
  },
  {
    icon: (
      <Avatar style={{ backgroundColor: "orange" }} size="small" icon="mail" />
    ),
    content: "fake@gmail.com"
  },
  {
    icon: (
      <Avatar
        style={{ backgroundColor: "orange" }}
        size="small"
        icon="compass"
      />
    ),
    content: "123 Fake Street, Fakeville Fakecountry"
  }
];
