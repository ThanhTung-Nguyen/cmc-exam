import { ExclamationCircleFilled } from "@ant-design/icons/lib/icons";
import { Button, Form, Input, Typography } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { openNotification } from "../../components/noti-custom";
import { USER_DATA } from "../../constants";
import { fetchUserList, loginAsync } from "../../redux/action/auth.action";
import path from "../../routes/path";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import { IUserData } from "../../type/auth";
import { WrapLoginForm, WrapLoginPage } from "../styled";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { userList } = useAppSelector((state) => state.auth);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    dispatch(fetchUserList());
  }, []);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem(USER_DATA)!);
    if (userData?.token) {
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
        openNotification(
          "error",
          "Thông tin đăng nhập không chính xác",
          3,
          "topRight"
        );
      }
    }
  };

  return (
    <WrapLoginPage>
      <WrapLoginForm>
        <Typography.Title>CMC Cyber Security</Typography.Title>
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
