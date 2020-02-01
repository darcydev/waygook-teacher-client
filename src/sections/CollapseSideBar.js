import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { CalculatorFilled, WalletFilled } from '@ant-design/icons';
import Cookies from 'js-cookie';

import './CollapseSideBar.css';

import MessageModal from '../components/DataEntry/Modals/MessageModal';
import SettingsModal from '../components/DataEntry/Modals/SettingsModal';

const { Sider } = Layout;

export default class CollapseSideBar extends Component {
  state = {
    ownProfile: false,
    collapsed: true
  };

  componentDidMount() {
    if (this.props.slug === Cookies.get('userID'))
      this.setState({ ownProfile: true });
  }

  onCollapse = collapsed => this.setState({ collapsed });

  saveFormRef = formRef => (this.formRef = formRef);

  render() {
    // console.log("SideBar State", this.state);

    const { ownProfile, collapsed } = this.state;

    const OWN_PROFILE_MENU_MARKUP = (
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1">
          <CalculatorFilled />
          <span>Calendar</span>
        </Menu.Item>
        <Menu.Item key="2">
          <CalculatorFilled />
          <span>Lessons</span>
        </Menu.Item>
        <Menu.Item key="3">
          <WalletFilled />
          <span>Wallet</span>
        </Menu.Item>
        <Menu.Item key="4">
          <SettingsModal />
        </Menu.Item>
      </Menu>
    );

    const OTHER_PROFILE_MENU_MARKUP = (
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1">
          <MessageModal toUser={this.props.slug} />
        </Menu.Item>
      </Menu>
    );

    const MENU_MARKUP = ownProfile
      ? OWN_PROFILE_MENU_MARKUP
      : OTHER_PROFILE_MENU_MARKUP;

    return (
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={this.onCollapse}
        style={{ margin: '0 20px 0 10px' }}
      >
        {MENU_MARKUP}
      </Sider>
    );
  }
}
