import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
export type TUser = {
  email: string;
  role: string;
  iat: number;
  exp: number;
};
export type TUserData = {
  userName: string;
  email: string;
  address: string;
  phone: string;
  id: string;
  role: "admin" | "user";
};
type TAuthState = {
  user: null | TUser;
  token: null | string;
  userId: null | string;
  userName: null | string;
  userDetails: null | TUserData;
};
const initialState: TAuthState = {
  user: null,
  token: null,
  userId: null,
  userName: null,
  userDetails: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token, userId, userName, userDetails } = action.payload;
      state.user = user;
      state.token = token;
      state.userId = userId;
      state.userName = userName;
      state.userDetails = userDetails;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.userId = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;

export const getAllUserData = (state: RootState) => state.auth;
