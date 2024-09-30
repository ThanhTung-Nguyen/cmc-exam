import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, Image, Layout, Modal } from "antd";
// import { useNavigate } from "react-router-dom";
import ButtonCus from "../../components/button-custom/button-custom";
import './style.less';
const { Header } = Layout;
// interface IHeaderProps {
//   collapsed?: boolean;
//   setCollapsed?: (value: boolean) => void;
// }
const HeaderComponent = () =>
  // props: IHeaderProps
  {
  

    return (
      <Header className="header">
        {/* <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed?.(!collapsed)}
        style={{
          fontSize: "16px",
          width: 64,
          height: 60,
        }}
      /> */}
        {/* <Typography.Title className="title tiro-bangla-regular">
          CMC Cyber Security
        </Typography.Title> */}
        <Image src='https://cmccybersecurity.com/wp-content/uploads/2023/04/cmccs-logo-dark.svg'preview={false}/>
        <Dropdown
          overlayClassName="user-info-dropdown"
          menu={{
            items: [
              {
                key: "1",
                // icon: <Image src={info} preview={false} width={17} />,
                label: (
                  <span style={{ color: "#085CB4" }}>Thông tin đăng nhập</span>
                ),
                // onClick: showModal,
              },
              {
                key: "2",
                // icon: <Image src={logoutIcon} preview={false} width={17} />,
                label: <span>Đăng xuất</span>,
                // onClick: logoutPage,
              },
            ],
          }}
        >
          <div style={{ display: "flex", gap: 22 }}>
            {/* <Image src={notiIcon} preview={false} /> */}
            <div style={{ display: "flex", gap: 10 }}>
              <UserOutlined/>
              {/* <Image src={avtFake} preview={false} /> */}
              <span className="user-action">
                {/* {userName} */}
                <DownOutlined style={{ marginLeft: "10px" }} />
              </span>
            </div>
          </div>
        </Dropdown>
        <Modal
          title="Thông tin đăng nhập"
          centered
          width={394}
          className="info-user-modal"
          // open={isModalOpen}
          // onOk={handleOk}
          // onCancel={handleCancel}
          footer={() => (
            <>
              <ButtonCus
                title="Đổi mật khẩu"
                type="primary"
                width={125}
                bg="#085CB4"
              />
              <ButtonCus
                title="Đăng xuất tất cả thiết bị"
                width={171}
                padding="0 4.5px"
                margin="0"
                // onClick={handleLogoutAllDevices}
              />
            </>
          )}
        >
          <div className="avatar">
            {/* <Image src={doctorFake} style={{ overflow: "hidden" }} /> */}
          </div>
          <div className="wrap-info">
            <div className="info-stt">
              Tên đăng nhập: <b>{}</b>
            </div>
            <div className="info-stt">
              Trạng thái: <b style={{ color: "#085CB4" }}>Đang hoạt động</b>
            </div>
          </div>
        </Modal>
      </Header>
    );
  };

export default HeaderComponent;