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
import Logout from "./pages/Logout";

import NavBar from "./components/Navigation/NavBar";

const { Header, Content, Footer } = Layout;

export default function App() {
  const USER_LOGGED_IN = Cookies.get("email") ? true : false;

  console.log(`user logged in: ${USER_LOGGED_IN}`);

  const MARKUP = (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/profile/:slug" component={Profile} />
    </>
  );

  return (
    <div className="App">
      <Layout>
        <Header style={{ display: "flex" }}>
          <img
            src="https://avatarfiles.alphacoders.com/162/162739.jpg"
            alt="logo"
            style={{ maxWidth: "50px", maxHeight: "50px", alignSelf: "center" }}
          />
          <NavBar />
        </Header>
        <Content style={{ minHeight: "90vh" }}>
          <Switch>{MARKUP}</Switch>
        </Content>
        <Footer
          style={{
            minHeight: "100px",
            background: "#001529"
          }}
        >
          Footer
        </Footer>
      </Layout>
    </div>
  );
}
