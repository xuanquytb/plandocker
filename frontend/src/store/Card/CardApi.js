import { getDataAPI, postDataAPI } from "../../common/api";
import { deleteAPI } from "../../common/common";

export function requestInsertCard() {
  return postDataAPI(`${process.env.REACT_APP_BACKEND}api/card/addCardItem`, {
    idCard: "1",
    idProduct: "2",
    dongia: "700000",
    quantity: "1",
  });
}
export function requestGetCard() {
  return getDataAPI(`${process.env.REACT_APP_BACKEND}api/card/allCard`, {});
}
export function requestGetSumMoneyCard() {
  return getDataAPI(
    `${process.env.REACT_APP_BACKEND}api/card/sumMoneycard`,
    {}
  );
}
export function requestDeleteCardDetail(id) {
  return deleteAPI(
    `${process.env.REACT_APP_BACKEND}api/card/cardDetail/${id.payload}`,
    {}
  );
}
