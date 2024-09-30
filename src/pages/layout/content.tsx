import { Layout } from "antd";
import { Outlet } from "react-router-dom";
const { Content } = Layout;
const ContentComponent = () => {
  return (
    <Content
      style={{ height: "calc(100% -(64px + 95px))", background: "#F9F9F9" }}
    >
      <Outlet />
    </Content>
  );
};

export default ContentComponent;