import React from 'react';
import { Layout } from 'antd';

import 'antd/dist/antd.css';

import Home from './pages/Home';

import NavBar from './components/Navigation/NavBar';

const { Header, Footer, Sider, Content } = Layout;

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Header>
          <NavBar />
        </Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>
            {/* TODO... insert routes */}
            <Home />
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}
