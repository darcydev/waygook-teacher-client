import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Layout } from 'antd';
import Cookies from 'js-cookie';

import 'antd/dist/antd.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Search from './pages/Search';
import Profile from './pages/Profile';
import Inbox from './pages/Inbox';
import Logout from './pages/Logout';

import HeaderSection from './sections/Header';
import FooterSection from './sections/Footer';

const { Content, Footer } = Layout;

export default function App() {
  const USER_LOGGED_IN = Cookies.get('email') ? true : false;

  return (
    <div className="App">
      <Layout style={{ background: 'var(--dark)' }}>
        <HeaderSection />
        <Content style={{ minHeight: '90vh', background: 'var(--main)' }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/profile/:slug" component={Profile} />
            <Route exact path="/inbox/:slug" component={Inbox} />
          </Switch>
        </Content>
        <StyledFooter>
          <FooterSection />
        </StyledFooter>
      </Layout>
    </div>
  );
}

// STYLES
const StyledFooter = styled(Footer)`
  padding: 0;
`;
