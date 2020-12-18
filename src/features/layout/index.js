import React from "react";

import { Layout as antLayot } from "antd";

import Header from "./Header";
import Footer from "./Footer";

const Content = antLayot.Content;

function Layout({ children }) {
  return (
    <>
      <antLayot className="Layout">
        <Header />
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">{children}</div>
        </Content>

        <Footer />
      </antLayot>
    </>
  );
}

export default Layout;
