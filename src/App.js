import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import "antd/dist/antd.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import NavBar from "./components/Navigation/NavBar";

const { Header, Footer, Sider, Content } = Layout;

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ background: "pink", minHeight: "100px" }}>
          <NavBar />
        </Header>
        <Content style={{ minHeight: "90vh" }}>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          {/* TODO: make error page <Route component={Error} /> */}
        </Content>
        <Footer
          style={{
            border: "5px solid red",
            minHeight: "100px",
            maxHeight: "500px"
          }}
        >
          Footer
        </Footer>
      </Layout>
    </div>
  );
}
