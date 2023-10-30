import { takeLatest } from "redux-saga/effects";
import { handleCreateOrder, handleGetAllOrder } from "./handleOrder";
import { createOrder, getOrders } from "./OrderSlice";

export default function* OrderSaga() {
    yield takeLatest(getOrders.type, handleGetAllOrder);
    yield takeLatest(createOrder.type, handleCreateOrder);
}
