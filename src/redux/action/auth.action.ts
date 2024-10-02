import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserList, handleLogin } from "../../api/auth.api";
import { IUserData } from "../../type/auth";

export const fetchUserList = createAsyncThunk(
  "auth/fetchUserList",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getUserList();
      return res.data as IUserData[];
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const loginAsync = createAsyncThunk(
  "auth/login",
  async (username: string, { rejectWithValue }) => {
    try {
      const res = await handleLogin(username);
      return res.data as IUserData;
    } catch (err) {
      return rejectWithValue(err || "Lỗi");
    }
  }
);
