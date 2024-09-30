import { styled } from "styled-components";

export const WrapLoginPage = styled.div`
    display: flex;
    flex-direction:column;
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
  .ant-form .ant-form-item .ant-input, .ant-btn {
    height: 44px;
  }
`;