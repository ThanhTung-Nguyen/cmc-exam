import { styled } from "styled-components";

export const WrapLoginPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const WrapLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  .ant-form {
    width: 100%;
  }
  .ant-form .ant-form-item .ant-input,
  .ant-input-password,
  .ant-btn {
    height: 44px;
    display: flex;
    align-items: center;
  }
`;

export const WrapProductForm = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  .ant-form {
    width: 40%;
  }
  .ant-form .ant-form-item .ant-input,
  .ant-input-password,
  .ant-btn {
    height: 44px;
    display: flex;
    align-items: center;
  }
`;
