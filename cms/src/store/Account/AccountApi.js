import { getDataAPI } from "../../common/api";

export function requestGetDataUser() {
  return getDataAPI(`${process.env.REACT_APP_BACKEND}api/auth/findAll`, {});
}
export function requestGetDataCustomer() {
  return getDataAPI(`${process.env.REACT_APP_BACKEND}api/auth/customer`, {});
}
