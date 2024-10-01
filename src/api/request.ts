import axios, { InternalAxiosRequestConfig } from "axios";
import { TOKEN } from "../constants";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL ?? "",
  timeout: 100000,
  headers: {
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem(TOKEN);
    config.headers["token"] = token;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  (res) => {
    const newRes = { ...res };
    return newRes;
  },
  async (err) => {
    console.log(err);

    return Promise.reject(err);
  }
);
