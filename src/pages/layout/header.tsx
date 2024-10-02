import {
  DownOutlined,
  PoweroffOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Dropdown, Layout, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import path from "../../routes/path";
import { useAppSelector } from "../../stores/hooks";
import "./style.less";

const { Header } = Layout;
const HeaderComponent = () => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);
  const handleLogout = () => {
    localStorage.clear();
    navigate(path.login);
  };
  return (
    <Header className="header">
      <Typography.Title className="title">
        {/* CMC Cyber Security */}
        Med Station CMS
      </Typography.Title>
      {/* <Image src='https://cmccybersecurity.com/wp-content/uploads/2023/04/cmccs-logo-dark.svg'preview={false}/> */}
      <Dropdown
        menu={{
          items: [
            {
              key: "1",
              icon: <PoweroffOutlined />,
              label: <span>Đăng xuất</span>,
              onClick: handleLogout,
            },
          ],
        }}
      >
        <div style={{ display: "flex", gap: 22 }}>
          <div style={{ display: "flex", gap: 10 }}>
            <UserOutlined />
            <span className="user-action">
              {user?.username}
              <DownOutlined style={{ marginLeft: "10px" }} />
            </span>
          </div>
        </div>
      </Dropdown>
    </Header>
  );
};

export default HeaderComponent;
