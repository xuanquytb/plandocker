import { getDataAPI } from "../../common/api";

export function requestGetPayment() {
  return getDataAPI(
    `${process.env.REACT_APP_BACKEND}api/payment/allPayment`,
    {}
  );
}
