import { call, put } from "redux-saga/effects";
import { requestGetAllCate } from "./CategoryApi";
import { setCategorys } from "./CategorySlice";

export function* handleGetAllCate({ type, payload }) {
    try {
        const response = yield call(requestGetAllCate);
        if (response.data.success) {
            yield put(setCategorys(response?.data?.categorys));
        }
    } catch (error) {
        console.log(error);
    }
}
