import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    logging: false,
    user: undefined,
    role: undefined,
    countCustomer: 0,
  },
  reducers: {
    login: (state) => ({
      ...state,
      logging: true,
    }),
    register: (state, actions) => ({
      ...state,
    }),
    verify: (state) => ({
      ...state,
      logging: true,
    }),
    addRole: (state, actions) => ({
      ...state,
      role: actions.payload,
    }),
    loginSuccess: (state, actions) => ({
      ...state,
      isLoggedIn: true,
      loading: false,
      user: actions.payload,
    }),
    getCountCustomer: (state, actions) => ({
      ...state,
      countCustomer: actions.payload,
    }),
    logout: (state) => ({
      ...state,
      isLoggedIn: false,
      loading: true,
      user: undefined,
    }),
  },
});

export const {
  loginSuccess,
  logout,
  login,
  verify,
  addRole,
  register,
  getCountCustomer,
} = authSlice.actions;

export default authSlice.reducer;
