import { ExclamationCircleFilled } from "@ant-design/icons/lib/icons";
import { Button, Form, Input, notification, Typography } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUserList, loginAsync } from "../../redux/action/auth.action";
// import { setUserData } from "../../redux/reducer/auth.reducer";
import path from "../../routes/path";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import { IUserData } from "../../type/auth";
import { WrapLoginForm, WrapLoginPage } from "../styled";
import { TOKEN } from "../../constants";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { userList } = useAppSelector((state) => state.auth);
  const [loading, setLoading] = useState<boolean>(false);
  const token = localStorage.getItem(TOKEN) as string;
  useEffect(() => {
    dispatch(fetchUserList());
  }, []);

  useEffect(() => {
    if (token) {
      navigate(path.home);
    }
  }, []);

  const onFinish = (value: IUserData) => {
    setLoading(true);
    if (userList) {
      const findUser = userList.find(
        (user) =>
          user.username == value.username && user.password == value.password
      );
      if (
        findUser?.username == value.username &&
        findUser?.password == value.password
      ) {
        setLoading(false);
        dispatch(loginAsync(value.username));
        navigate(path.home);
      } else {
        setLoading(false);
        notification.error({
          message: "Sai thông tin đăng nhập!",
          duration: 1,
          placement: "topRight",
        });
      }
    }
  };

  return (
    <WrapLoginPage>
      <WrapLoginForm>
        {/* <Typography.Title>CMC Cyber Security</Typography.Title> */}
        <Typography.Title>Med Station CMS</Typography.Title>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="username"
            label="Tài khoản"
            rules={[
              {
                required: true,
                message: (
                  <>
                    <ExclamationCircleFilled />
                    &nbsp; Tài khoản không được để trống
                  </>
                ),
              },
            ]}
          >
            <Input placeholder="Nhập tài khoản" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Mật khẩu"
            rules={[
              {
                required: true,
                message: (
                  <>
                    <ExclamationCircleFilled />
                    &nbsp; Mật khẩu không được để trống
                  </>
                ),
              },
            ]}
          >
            <Input.Password placeholder="Nhập mật khẩu" />
          </Form.Item>
          <Button type="primary" block htmlType="submit" loading={loading}>
            Đăng nhập
          </Button>
        </Form>
      </WrapLoginForm>
    </WrapLoginPage>
  );
};

export default LoginPage;
