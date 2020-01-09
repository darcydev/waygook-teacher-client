import React, { Component } from "react";
import { Icon, Layout, Menu } from "antd";
import Cookies from "js-cookie";

const { Sider } = Layout;

const dummyData = [
  {
    title: "Message",
    icon: <Icon type="message" />,
    href: "https://google.com",
    ownProfile: false
  },
  {
    title: "Calendar",
    icon: <Icon type="calendar" />,
    ownProfile: true
  },
  {
    title: "Lessons",
    icon: <Icon type="schedule" />,
    ownProfile: true
  },
  {
    title: "Wallet",
    icon: <Icon type="wallet" />,
    ownProfile: true
  },
  {
    title: "Settings",
    icon: <Icon type="setting" />,
    ownProfile: true
  }
];

export default class CollapseSideBar extends Component {
  state = {
    data: dummyData,
    ownProfile: false,
    collapsed: false
  };

  componentDidMount() {
    if (this.props.slug === Cookies.get("userID"))
      this.setState({ ownProfile: true });
  }

  onCollapse = (collapsed) => this.setState({ collapsed });

  render() {
    console.log("SideBar State", this.state);

    const LIST_MARKUP = dummyData.map((v, i) => {
      if (this.state.ownProfile === v.ownProfile)
        return (
          <Menu.Item key={i}>
            {v.icon}
            <span>{v.title}</span>
          </Menu.Item>
        );
    });

    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
        style={{ margin: "0 20px 0 10px" }}
      >
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          {LIST_MARKUP}
        </Menu>
      </Sider>
    );
  }
}
