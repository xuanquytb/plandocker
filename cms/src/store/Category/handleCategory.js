import { call, put } from "redux-saga/effects";
import { requestAddCategory, requestDeleteCategory, requestGetAllCate } from "./CategoryApi";
import { setCategorys } from "./CategorySlice";
import { toast } from "react-toastify";

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

export function* handleAddCategory({ type, payload }) {
    try {
        const response = yield call(requestAddCategory, { payload });
        if (response.data.success) {
            yield put(setCategorys(response?.data?.categorys));
            toast.success("Thêm danh mục thành công");
        } else {
            toast.info("Thêm danh mục thất bại");
        }
    } catch (error) {
        toast.info("Thêm danh mục thất bại");
        console.log(error);
    }
}
export function* handleDeleteCategory({ type, payload }) {
    try {
        const response = yield call(requestDeleteCategory, { payload });
        if (response.data.success) {
            toast.success("Xóa danh mục thành công");
        } else {
            toast.info("Xóa danh mục thất bại");
        }
    } catch (error) {
        console.log(error);
    }
}
