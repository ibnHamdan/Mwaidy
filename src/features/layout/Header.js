import React from "react";
import { Layout as antLayout, Menu, Avatar } from "antd";

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
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Login</Menu.Item>
          <Menu.Item key="3">Regist</Menu.Item>
        </Menu>
        <Avatar size={40}>USER</Avatar>
      </antHeader>
    </>
  );
}

export default Header;
