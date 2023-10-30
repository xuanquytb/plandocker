import { getDataAPI, postDataAPINoAuth } from "../../common/api";

export function requestRegister(registerForm) {
  // return postDataAPINoAuth(`${process.env.REACT_APP_BACKEND}api/auth/register`, { ...registerForm, nameRole: "Customer", address: "Chưa cập nhật" });
}
export function requestLogin() {
  return postDataAPINoAuth(`${process.env.REACT_APP_BACKEND}api/auth/login`, {
    username: "admin",
    password: "admin",
  });
}
export function requestVerify() {
  return getDataAPI(`${process.env.REACT_APP_BACKEND}api/auth/verify`, {});
}
export function requestGetCountCustomer() {
  return getDataAPI(`${process.env.REACT_APP_BACKEND}api/auth/countUser`, {});
}
