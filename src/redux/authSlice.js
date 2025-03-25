import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isAuthenticated: false },
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      localStorage.setItem("auth", "true");
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem("auth");
    },
    checkAuthStatus: (state) => {
      state.isAuthenticated = localStorage.getItem("auth") === "true";
    },
  },
});

export const { login, logout, checkAuthStatus } = authSlice.actions;
export default authSlice.reducer;
