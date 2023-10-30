import { call, put } from "redux-saga/effects";
import { requestCreateOrder, requestGetOrder } from "./OrderApi";
import { setOrders } from "./OrderSlice";
import { toast } from "react-toastify";

export function* handleGetAllOrder({ type, payload }) {
  try {
    const response = yield call(requestGetOrder);
    if (response.data.success) {
      yield put(setOrders(response?.data?.orders));
    }
  } catch (error) {}
}
export function* handleCreateOrder({ type, payload }) {
  try {
    const response = yield call(requestCreateOrder, payload);
    if (response.data.success) {
      toast.success("Đặt hàng thành công");
    }
  } catch (error) {}
}
