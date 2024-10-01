import { createSlice } from "@reduxjs/toolkit";
import { IUserReducer } from "../../type/auth";
import { fetchUserList } from "../action/auth.action";

const initialState: IUserReducer = {
  userList: [],
  user: {
    password: "",
    role: "",
    token: "",
    username: "",
  },
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
    },
    resetUserList: (state) => {
      state.userList = [];
    },
    resetUser: (state) => {
      state.user = { ...initialState.user };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserList.fulfilled, (state, action) => {
        state.loading = false;
        state.userList = action.payload;
      })
      .addCase(fetchUserList.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setUserData, resetUserList, resetUser } = authSlice.actions;
export default authSlice.reducer;
