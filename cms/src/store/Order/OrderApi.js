import { getDataAPI, postDataAPI, putData } from "../../common/api";

export function requestGetOrder() {
  return getDataAPI(
    `${process.env.REACT_APP_BACKEND}api/Order/allOrderAdmin`,
    {}
  );
}
export function requestGetSumMoney() {
  return getDataAPI(
    `${process.env.REACT_APP_BACKEND}api/Order/allSummoney`,
    {}
  );
}
export function requestGetSumMoneyToday() {
  return getDataAPI(
    `${process.env.REACT_APP_BACKEND}api/Order/allSummoney/day`,
    {}
  );
}
// export function requestGetOrderAdmin() {
//     return getDataAPI(`${process.env.REACT_APP_BACKEND}api/Order/allOrderAdmin`, {});
// }

export function requestCreateOrder(orderDetail) {
  return postDataAPI(
    `${process.env.REACT_APP_BACKEND}api/Order/addOrderDetail`,
    { ...orderDetail }
  );
}
export function requestUpdateOrder(params) {
  return putData(
    `${process.env.REACT_APP_BACKEND}api/Order/updateState/${params.id}`,
    { ...params }
  );
}
