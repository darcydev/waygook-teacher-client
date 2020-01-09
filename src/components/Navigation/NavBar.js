import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Menu } from "antd";
import Cookies from "js-cookie";

import { logout } from "../../data/logout";

import SimpleButton from "../UI/SimpleButton";

const data = [
  {
    title: "Login",
    link: "/login",
    icon: undefined,
    loggedIn: false
  },
  {
    title: "Search",
    link: "/search",
    icon: undefined,
    loggedIn: true
  },
  {
    title: "Profile",
    link: `profile/${Cookies.get("userID")}`,
    icon: undefined,
    loggedIn: true
  },
  {
    title: "Logout",
    link: "/logout",
    icon: undefined,
    loggedIn: true
  }
];

export default function NavBar() {
  const USER_LOGGED_IN = Cookies.get("userID") > 0;

  const MENU_ITEMS = data.map((v, i) => {
    if (v.loggedIn === USER_LOGGED_IN) {
      return (
        <Menu.Item key={i}>
          <Link to={v.link}>{v.title}</Link>
        </Menu.Item>
      );
    }
  });

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["1"]}
      style={{ lineHeight: "64px", width: "100%", textAlign: "right" }}
    >
      {MENU_ITEMS}
    </Menu>
  );
}

/*    <Container>
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
    </Container> */

const Container = styled.div`
  color: white;
`;

const ButtonContainer = styled.div``;
