import { call, put } from "redux-saga/effects";
import { requestGetPayment } from "./PaymentApi";
import { setPayment } from "./PaymentSlice";

export function* handleGetAllPayment({ type, payload }) {
    try {
        const response = yield call(requestGetPayment);
        if (response.data.success) {
            yield put(setPayment(response?.data?.payment));
        }
    } catch (error) {
        console.log(error);
    }
}
