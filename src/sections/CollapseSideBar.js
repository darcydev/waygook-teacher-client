import React, { Component } from 'react';
import { Icon, Layout, Menu } from 'antd';
import Cookies from 'js-cookie';

import './CollapseSideBar.css';

import { MessageModalForm } from '../components/DataEntry/Forms/Modals/Message';
import { SettingsModalForm } from '../components/DataEntry/Forms/Modals/Settings';

const { Sider } = Layout;

export default class CollapseSideBar extends Component {
  state = {
    ownProfile: false,
    collapsed: true,
    calendarModalOpen: false,
    walletModalOpen: false
  };

  componentDidMount() {
    if (this.props.slug === Cookies.get('userID'))
      this.setState({ ownProfile: true });
  }

  onCollapse = collapsed => this.setState({ collapsed });

  saveFormRef = formRef => (this.formRef = formRef);

  render() {
    // console.log("SideBar State", this.state);

    const OWN_PROFILE_MENU_MARKUP = (
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
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
        <Menu.Item key="4">
          <SettingsModalForm />
        </Menu.Item>
      </Menu>
    );

    const OTHER_PROFILE_MENU_MARKUP = (
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1">
          <MessageModalForm toUser={this.props.slug} />
        </Menu.Item>
      </Menu>
    );

    const MENU_MARKUP = this.state.ownProfile
      ? OWN_PROFILE_MENU_MARKUP
      : OTHER_PROFILE_MENU_MARKUP;

    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
        style={{ margin: '0 20px 0 10px' }}
      >
        {MENU_MARKUP}
      </Sider>
    );
  }
}
