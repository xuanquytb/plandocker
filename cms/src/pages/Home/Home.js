import React, { useState } from "react";
import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Layout, Menu } from "antd";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loggout } from "../../store/Auth/AuthSlice";

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Bảng điều khiển", "/", <PieChartOutlined />),
  getItem("Quản trị viên", "/accountAdmin", <DesktopOutlined />),
  getItem("QL Sản phẩm", "sub1", <UserOutlined />, [
    getItem("QL ngành hàng", "/categorys"),
    // getItem("Quản lý thương hiệu", "/manufacture"),
    getItem("Quản lý sản phẩm", "/product"),
  ]),
  getItem("QL khách hàng", "/accountCustomer", <FileOutlined />),
  getItem("QL Đơn hàng", "/order", <TeamOutlined />),
];

const Home = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div
            style={{
              height: 32,
              margin: 16,
              background: "rgb(0, 21, 41)",
              color: "#ffffff",
              display: "grid",
              placeItems: "center",
            }}
          >
            Computer
          </div>
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
            onClick={(item) => {
              navigate(`${item.key}`);
            }}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            style={{
              padding: 0,
              background: "#ffffff",
              height: "60px",
              width: "100%",
              textAlign: "right",
            }}
          >
            <Button
              onClick={() => {
                navigate("/login");
                dispatch(loggout());
                window.localStorage.removeItem("accessToken");
              }}
              type="primary"
              style={{ marginRight: 20 }}
            >
              Đăng xuất
            </Button>
          </Header>
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            ></Breadcrumb>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: "#ffffff",
              }}
            >
              {children}
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            VMU Design ©2023 Created by VMU DEV
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default Home;
