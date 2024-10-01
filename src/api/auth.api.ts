import { AUTH_URL } from "../constants/api";
import { axiosInstance } from "./request";

export const getUserList = () => {
  return axiosInstance.get(AUTH_URL);
};
export const handleLogin = (username: string) => {
  return axiosInstance.get(AUTH_URL + "/" + username);
};
