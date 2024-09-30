
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import path from "../../routes/path";

type MenuItem = Required<MenuProps>["items"][number];
const { Sider } = Layout;

const SideBar = () =>
  {
    const getItem = (
      label: React.ReactNode,
      key: React.Key,
      icon?: React.ReactNode,
      children?: MenuItem[]
    ) => {
      return {
        key,
        icon,
        children,
        label,
      } as MenuItem;
    };
    const navigate = useNavigate();
    const items: MenuItem[] = [
      getItem("Sản phẩm", path.home, '', [
        getItem(
          "Danh sách sản phẩm",
          path.products
        ),
        getItem(
          "Quản lý sản phẩm",
          path.management
        ),
      ]),
    ];
    return (
      <Sider
        // collapsed={collapsed}
        className="sidebar"
        theme="light"
        width={256}
      >
        <div className="demo-logo-vertical" />
        <Menu
          mode="inline"
          defaultSelectedKeys={[path.products]}
          items={items}
          onClick={(e) => {
            navigate(e.key);
          }}
          className="menu-in-sidebar"
        />
      </Sider>
    );
  };

export default SideBar;
