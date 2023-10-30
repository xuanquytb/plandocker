import { call, put } from "redux-saga/effects";
import {
  requestGetCountCustomer,
  requestLogin,
  requestVerify,
} from "./AuthApi";
import { addRole, loginSuccess, setCountUser } from "./AuthSlice";
import { toast } from "react-toastify";

export function* handleLogin({ type, payload }) {
  try {
    const response = yield call(requestLogin, payload);
    if (response.data.success) {
      yield put(loginSuccess(response?.data?.user));
      yield put(addRole(response?.data?.role));
      window.localStorage.setItem("accessToken", response?.data?.token);
    }
  } catch (error) {
    toast.info("Tài khoản hoặc mật khẩu không chính xác");
  }
}

export function* handleVerify({ type, payload }) {
  try {
    const response = yield call(requestVerify);
    if (response.data.success) {
      yield put(loginSuccess(response?.data?.user));
      yield put(addRole(response?.data?.role));

      window.localStorage.setItem("accessToken", response?.data?.token);
    }
  } catch (error) {
    window.localStorage.removeItem("accessToken");
  }
}
export function* handleGetCountCustomer({ type, payload }) {
  try {
    const response = yield call(requestGetCountCustomer);
    if (response.data.success) {
      yield put(setCountUser(response?.data?.countUser));
    }
  } catch (error) {}
}
