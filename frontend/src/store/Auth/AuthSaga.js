import { takeLatest } from "redux-saga/effects";
import { getCountCustomer, login, register, verify } from "./AuthSlice";
import {
  handleGetCountCustomer,
  handleLogin,
  handleRegister,
  handleVerify,
} from "./handleAuth";

export default function* AuthSaga() {
  yield takeLatest(login.type, handleLogin);
  yield takeLatest(verify.type, handleVerify);
  yield takeLatest(register.type, handleRegister);
  yield takeLatest(getCountCustomer.type, handleGetCountCustomer);
}
