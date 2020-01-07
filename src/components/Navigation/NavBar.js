import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Menu, Row, Col } from "antd";

import SimpleButton from "../UI/SimpleButton";

const data = [
  {
    title: "Login",
    link: "/login"
  }
];

export default function NavBar() {
  const ITEMS_MARKUP = data.map((v, i) => (
    <Menu.Item key={`${i}:${v.title}`}>
      <Link to={v.link}>
        <SimpleButton
          type="link"
          href={v.link}
          text={v.title}
          styles={{ color: "wheat" }}
        />
      </Link>
    </Menu.Item>
  ));

  return (
    <Container>
      <Row>
        <Col span={8}>
          <Link to="/">INSERT LOGO</Link>
        </Col>
        <Col span={16}>
          <Menu
            mode="horizontal"
            style={{
              background: "inherit",
              color: "wheat"
            }}
          >
            {ITEMS_MARKUP}
          </Menu>
        </Col>
      </Row>
    </Container>
  );
}

const Container = styled.div`
  color: white;
`;
