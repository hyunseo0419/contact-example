import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

export default function HeadBar() {
  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ textAlign: "center", lineHeight: "64px" }}
          >
            <Menu.Item
              key="1"
              style={{ paddingLeft: "3%", paddingRight: "3%" }}
            >
              <Link to="/getContact">Get All Contacts</Link>
            </Menu.Item>
            <Menu.Item
              key="2"
              style={{ paddingLeft: "3%", paddingRight: "3%" }}
            >
              <Link to="/getUniqueContact">Get Contact</Link>
            </Menu.Item>
            <Menu.Item
              key="3"
              style={{ paddingLeft: "3%", paddingRight: "3%" }}
            >
              <Link to="/addContact">Add New Contact</Link>
            </Menu.Item>
            <Menu.Item
              key="4"
              style={{ paddingLeft: "3%", paddingRight: "3%" }}
            >
              <Link to="/deleteContact">Delete Contact</Link>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </div>
  );
}
