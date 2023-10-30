import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    logging: true,
    user: undefined,
    role: undefined,
    countUser: 0,
  },
  reducers: {
    verify: (state) => ({
      ...state,
      logging: true,
    }),
    login: (state) => ({
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
      logging: false,
      user: {
        ...actions.payload,
        idRole: [actions.payload.idRole],
      },
    }),
    loginFailed: (state) => ({
      ...state,
      isLoggedIn: false,
      logging: false,
      user: undefined,
    }),

    loggout: (state) => ({
      ...state,
      isLoggedIn: false,
      logging: true,
      user: undefined,
    }),
    getCountUser() {},
    setCountUser: (state, actions) => ({
      ...state,
      countUser: actions.payload,
    }),
  },
});

export const {
  verify,
  login,
  loginSuccess,
  loginFailed,
  loggout,
  getCountUser,
  setCountUser,
  addRole,
} = authSlice.actions;

export default authSlice.reducer;
