import React from 'react';
import { Route, Switch } from 'react-router-dom';
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

import CustomFooter from './sections/Footer';

import NavBar from './components/Navigation/NavBar';

const { Header, Content, Footer } = Layout;

export default function App() {
  const USER_LOGGED_IN = Cookies.get('email') ? true : false;

  return (
    <div className="App">
      <Layout style={{ background: 'var(--dark)' }}>
        <Header style={{ display: 'flex' }}>
          <img
            src="https://avatarfiles.alphacoders.com/162/162739.jpg"
            alt="logo"
            style={{ maxWidth: '50px', maxHeight: '50px', alignSelf: 'center' }}
          />
          <NavBar />
        </Header>
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
        <Footer style={{ padding: 0 }}>
          <CustomFooter />
        </Footer>
      </Layout>
    </div>
  );
}
