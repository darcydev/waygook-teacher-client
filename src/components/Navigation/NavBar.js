import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Menu, Row, Col } from "antd";
import Cookies from "js-cookie";

import { logout } from "../../data/logout";
import { checkUserLoggedIn } from "../../data/login";

import SimpleButton from "../UI/SimpleButton";

const data = [
  {
    title: "Login",
    link: "/login"
  },
  {
    title: "Search",
    link: "/search"
  },
  { title: "Profile", link: `profile/${Cookies.get("userID")}` }
];

export default function NavBar() {
  const USER_LOGGED_IN = checkUserLoggedIn();

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
            <SimpleButton text="logout" onClick={logout} />
          </Menu>
        </Col>
      </Row>
    </Container>
  );
}

const Container = styled.div`
  color: white;
`;

const ButtonContainer = styled.div``;
