import { getDataAPI, postDataAPINoAuth } from "../../common/api";

export function requestRegister(registerForm) {
  return postDataAPINoAuth(
    `${process.env.REACT_APP_BACKEND}api/auth/register`,
    {
      ...registerForm,
      nameRole: "Customer",
      address: "Chưa cập nhật",
    }
  );
}
export function requestLogin(loginForm) {
  return postDataAPINoAuth(`${process.env.REACT_APP_BACKEND}api/auth/login`, {
    ...loginForm,
  });
}
export function requestVerify() {
  return getDataAPI(`${process.env.REACT_APP_BACKEND}api/auth/verify`, {});
}
export function requestGetCountCustomer() {
  return getDataAPI(`${process.env.REACT_APP_BACKEND}api/auth/countUser`, {});
}
