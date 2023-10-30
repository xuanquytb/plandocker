import { getDataAPI, postDataAPI } from "../../common/api";

export function requestGetOrder() {
  return getDataAPI(
    `${process.env.REACT_APP_BACKEND}api/Order/allOrderCustomer`,
    {}
  );
}

export function requestCreateOrder(orderDetail) {
  return postDataAPI(
    `${process.env.REACT_APP_BACKEND}api/Order/addOrderDetail`,
    { ...orderDetail }
  );
}
