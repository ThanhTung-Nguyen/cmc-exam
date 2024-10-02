import { createSlice } from "@reduxjs/toolkit";
import { USER_DATA } from "../../constants";
import { IUserData, IUserReducer } from "../../type/auth";
import { fetchUserList, loginAsync } from "../action/auth.action";

const initialState: IUserReducer = {
  userList: [],
  user: JSON.parse(localStorage.getItem(USER_DATA) ?? "{}") as IUserData,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // setUserData: (state, action) => {
    //
    //   state.user = action.payload;
    // },
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
      })
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        // eslint-disable-next-line
        const { password, ...rest } = action.payload;
        localStorage.setItem(USER_DATA, JSON.stringify(rest));
      })
      .addCase(loginAsync.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {
  // setUserData,
  resetUserList,
  resetUser,
} = authSlice.actions;
export default authSlice.reducer;
