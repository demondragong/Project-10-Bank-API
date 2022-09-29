import { createSlice } from "@reduxjs/toolkit";

const token = JSON.parse(localStorage.getItem("token"));

const initialState = token
  ? { isLoggedIn: true, token }
  : { isLoggedIn: false, token: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.body.token;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});


export const { setCredentials, logout } = authSlice.actions

export default authSlice.reducer