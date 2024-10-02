import {
  DownOutlined,
  PoweroffOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Dropdown, Image, Layout } from "antd";
import { useNavigate } from "react-router-dom";
import path from "../../routes/path";
import { useAppSelector } from "../../stores/hooks";
import "./style.less";
import { openNotification } from "../../components/noti-custom";

const { Header } = Layout;
const HeaderComponent = () => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);
  const handleLogout = () => {
    localStorage.clear();
    navigate(path.login);
    openNotification("success", "Đăng xuất thành công", 3, "topRight");
  };
  return (
    <Header className="header">
      {/* <Typography.Title className="title">
        CMC Cyber Security
      </Typography.Title> */}
      <Image
        src="https://cmccybersecurity.com/wp-content/uploads/2023/04/cmccs-logo-dark.svg"
        preview={false}
      />
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
            <span>
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
