import React, { Component } from "react";
import { Icon, Layout, Menu } from "antd";
import Cookies from "js-cookie";

import SimpleModal from "../components/Feedback/SimpleModal";

const { Sider } = Layout;

export default class CollapseSideBar extends Component {
  state = {
    ownProfile: false,
    collapsed: true,
    messageModalOpen: false,
    calendarModalOpen: false,
    walletModalOpen: false,
    settingsModalOpen: false
  };

  componentDidMount() {
    if (this.props.slug === Cookies.get("userID"))
      this.setState({ ownProfile: true });
  }

  onCollapse = (collapsed) => this.setState({ collapsed });

  render() {
    console.log("SideBar State", this.state);

    const OWN_PROFILE_MENU_MARKUP = (
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item
          key="1"
          onClick={() =>
            this.setState({
              calendarModalOpen: !this.state.calendarModalOpen
            })
          }
        >
          <Icon type="calendar" />
          <span>Calendar</span>
        </Menu.Item>
        <Menu.Item
          key="2"
          onClick={() =>
            this.setState({
              lessonsModalOpen: !this.state.lessonsModalOpen
            })
          }
        >
          <Icon type="calendar" />
          <span>Lessons</span>
        </Menu.Item>
        <Menu.Item
          key="3"
          onClick={() =>
            this.setState({
              walletModalOpen: !this.state.walletModalOpen
            })
          }
        >
          <Icon type="wallet" />
          <span>Wallet</span>
        </Menu.Item>
        <Menu.Item
          key="4"
          onClick={() =>
            this.setState({
              settingsModalOpen: !this.state.settingsModalOpen
            })
          }
        >
          <Icon type="setting" />
          <span>Settings</span>
        </Menu.Item>
      </Menu>
    );

    const OTHER_PROFILE_MENU_MARKUP = (
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item
          key="1"
          onClick={() =>
            this.setState({
              messageModalOpen: !this.state.messageModalOpen
            })
          }
        >
          <Icon type="message" />
          <span>Message</span>
        </Menu.Item>
      </Menu>
    );

    const MENU_MARKUP = this.state.ownProfile
      ? OWN_PROFILE_MENU_MARKUP
      : OTHER_PROFILE_MENU_MARKUP;

    /* MODAL MARKUP */
    let MODAL_MARKUP = null;
    if (this.state.messageModalOpen)
      MODAL_MARKUP = <SimpleModal visible={true} />;

    return (
      <>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          style={{ margin: "0 20px 0 10px" }}
        >
          {MENU_MARKUP}
        </Sider>
        {MODAL_MARKUP}
      </>
    );
  }
}
