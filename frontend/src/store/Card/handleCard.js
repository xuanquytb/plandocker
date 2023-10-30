import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import {
  requestDeleteCardDetail,
  requestGetCard,
  requestGetSumMoneyCard,
} from "./CardApi";
import { setCard, setSumMoneyCard } from "./CardSlice";

export function* handleGetAllCard({ type, payload }) {
  try {
    const response = yield call(requestGetCard);
    if (response.data.success) {
      yield put(setCard(response?.data?.card));
    }
  } catch (error) {}
}
export function* handleGetSumMoneyCard({ type, payload }) {
  try {
    const response = yield call(requestGetSumMoneyCard);
    if (response.data.success) {
      yield put(setSumMoneyCard(response.data.sum));
    }
  } catch (error) {}
}

export function* handleDeleteCardDetail({ type, payload }) {
  try {
    const response = yield call(requestDeleteCardDetail, { payload });

    if (response.data.success) {
      yield put(setSumMoneyCard(response?.data?.sumMonney?.tongthanhtoan));
      toast.success("Xóa sản phẩm thành công");
      return true;
    }
  } catch (error) {
    toast.success("Xóa sản phẩm thất bại");
  }
}
