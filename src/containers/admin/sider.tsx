import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import HeaderLoginAuth from "@/layouts/dashboard/header";
import Link from "next/link";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Trang Chủ", "1", <PieChartOutlined />),
  getItem("QL Nhân Viên", "2",<Link href={'/listNhanVien'}><DesktopOutlined /></Link> ),
  getItem("QL Khách Hàng", "3", <UserOutlined />),
  getItem("QL Phim", "4", <TeamOutlined />),
  getItem("QL Lịch Chiếu Phim", "5", <FileOutlined />),
  getItem("QL Phòng Chiếu", "6", <FileOutlined />),
];

const SiderAdmin: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
      <Sider
        style={{ backgroundColor: "white " }}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 52,
            margin: 26,
            background: "red",
          }}
        ></div>

        <Menu
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          //  style={{margin:'0 0rem', padding:'0 1rem'}}
        />
      </Sider>
     
  );
};

export default SiderAdmin;
