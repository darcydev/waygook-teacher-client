import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import Cookies from "js-cookie";

import "antd/dist/antd.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Search from "./pages/Search";
import Profile from "./pages/Profile";

import NavBar from "./components/Navigation/NavBar";

const { Header, Content, Footer } = Layout;

export default function App() {
  const USER_LOGGED_IN = Cookies.get("email") ? true : false;

  console.log(USER_LOGGED_IN);

  const MARKUP = USER_LOGGED_IN ? (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/profile" component={Profile} />
    </>
  ) : (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </>
  );

  return (
    <div className="App">
      <Layout>
        <Header style={{ border: "5px solid red", minHeight: "100px" }}>
          <NavBar />
        </Header>
        <Content style={{ minHeight: "90vh" }}>{MARKUP}</Content>
        <Footer
          style={{
            border: "5px solid red",
            minHeight: "100px"
          }}
        >
          Footer
        </Footer>
      </Layout>
    </div>
  );
}
