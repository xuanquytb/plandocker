import { takeLatest } from "redux-saga/effects";
import { getCountUser, login, verify } from "./AuthSlice";
import {
  handleGetCountCustomer,
  handleLogin,
  handleVerify,
} from "./handleAuth";

export default function* AuthSaga() {
  yield takeLatest(login.type, handleLogin);
  yield takeLatest(verify.type, handleVerify);
  yield takeLatest(getCountUser.type, handleGetCountCustomer);
}
