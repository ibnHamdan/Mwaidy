import React from "react";
import { Layout as antLayout, Menu, Avatar } from "antd";
import { Switch, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { loginSelector } from "../login/redux/login";

const antHeader = antLayout.Header;

function Header() {
  const user = useSelector(loginSelector);

  console.log("user", user);
  return (
    <>
      <antHeader>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/login">Login</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/regist">Regist</Link>
          </Menu.Item>
        </Menu>
        {/* <Avatar size={40}>USER</Avatar> */}
      </antHeader>
    </>
  );
}

export default Header;
