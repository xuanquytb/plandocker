import { takeLatest } from "redux-saga/effects";
import {
  handleCreateOrder,
  handleGetAllOrder,
  handleGetSumMoney,
  handleGetSumMoneyToday,
  handleUpdateOrder,
} from "./handleOrder";
import {
  createOrder,
  getOrders,
  getSumMoney,
  getSumMoneyToday,
  updateOrder,
} from "./OrderSlice";

export default function* OrderSaga() {
  yield takeLatest(getOrders.type, handleGetAllOrder);
  yield takeLatest(createOrder.type, handleCreateOrder);
  yield takeLatest(updateOrder.type, handleUpdateOrder);
  yield takeLatest(getSumMoney.type, handleGetSumMoney);
  yield takeLatest(getSumMoneyToday.type, handleGetSumMoneyToday);
}
