import { call, put } from "redux-saga/effects";
import {
  requestCreateOrder,
  requestGetOrder,
  requestGetSumMoney,
  requestGetSumMoneyToday,
  requestUpdateOrder,
} from "./OrderApi";
import { setOrders, setSumMoney, setSumMoneyToday } from "./OrderSlice";
import { toast } from "react-toastify";

export function* handleGetAllOrder({ type, payload }) {
  try {
    const response = yield call(requestGetOrder);
    if (response.data.success) {
      yield put(setOrders(response?.data?.orders));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetSumMoney() {
  try {
    const response = yield call(requestGetSumMoney);
    if (response.data.success) {
      yield put(setSumMoney(response?.data?.monney?.summoney));
    }
  } catch (error) {
    console.log(error);
  }
}
export function* handleGetSumMoneyToday() {
  try {
    const response = yield call(requestGetSumMoneyToday);
    if (response.data.success) {
      yield put(setSumMoneyToday(response?.data?.monney?.summoney));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* handleCreateOrder({ type, payload }) {
  try {
    const response = yield call(requestCreateOrder, payload);
    if (response.data.success) {
      toast.success("Đặt hàng thành công");
    }
  } catch (error) {
    console.log(error);
  }
}
export function* handleUpdateOrder({ type, payload }) {
  try {
    const response = yield call(requestUpdateOrder, payload);
    if (response.data.success) {
      toast.success("Cập nhật thành công");
    }
  } catch (error) {
    console.log(error);
  }
}
