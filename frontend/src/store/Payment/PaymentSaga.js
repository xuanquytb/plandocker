import { takeLatest } from "redux-saga/effects";
import { handleGetAllPayment } from "./handlePayment";
import { getPayment } from "./PaymentSlice";

export default function* PaymentSaga() {
    yield takeLatest(getPayment.type, handleGetAllPayment);
}
