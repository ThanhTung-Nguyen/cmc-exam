import { Button, Form, Input, Typography } from "antd";
import { WrapLoginForm, WrapLoginPage } from "../styled";
import { ExclamationCircleFilled } from "@ant-design/icons/lib/icons";
const LoginPage = () => {
  return (
    <WrapLoginPage>
      <WrapLoginForm>
        <Typography.Title>CMC Cyber Security</Typography.Title>
        <Form layout="vertical">
          <Form.Item
            name="username"
            label="Tài khoản"
            rules={[
              {
                required: true,
                message: (
                  <>
                    <ExclamationCircleFilled />&nbsp;
                    Tài khoản không được để trống
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
            rules={[{ required: true, message: (
              <>
                <ExclamationCircleFilled />&nbsp;
                Mật khẩu không được để trống
              </>
            ), }]}
          >
            <Input.Password placeholder="Nhập mật khẩu" />
          </Form.Item>
          <Button type="primary" block htmlType="submit">
            Đăng nhập
          </Button>
        </Form>
      </WrapLoginForm>
    </WrapLoginPage>
  );
};

export default LoginPage;
