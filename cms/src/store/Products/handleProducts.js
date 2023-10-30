import { call, put } from "redux-saga/effects";
import {
    requestAddProduct,
    requestDeleteProduct,
    requestGetAllProduct,
    requestGetAllProductSold,
    requestGetOneProduct,
    requestUpdateProduct,
} from "./ProductsApi";
import { setProduct, setProducts, setProductsSold } from "./ProductSlice";
import { toast } from "react-toastify";

export function* handleGetAllProduct({ type, payload }) {
    try {
        const response = yield call(requestGetAllProduct);
        if (response.data.success) {
            yield put(setProducts(response?.data?.products));
        }
    } catch (error) {
        console.log(error);
    }
}
export function* handleGetAllProductSold({ type, payload }) {
    try {
        const response = yield call(requestGetAllProductSold);
        if (response.data.success) {
            yield put(setProductsSold(response?.data?.products));
        }
    } catch (error) {
        console.log(error);
    }
}
export function* handleGetOneProduct({ type, payload }) {
    try {
        const response = yield call(requestGetOneProduct);
        if (response.data.success) {
            yield put(setProduct(response?.data?.product));
        }
    } catch (error) {
        console.log(error);
    }
}

export function* handleAddProduct({ type, payload }) {
    try {
        const response = yield call(requestAddProduct, { payload });
        if (response.data.success) {
            yield put(setProducts(response?.data?.products));
            toast.success("Thêm sản phẩm thành công");
        }
    } catch (error) {
        toast.success("Thêm sản phẩm thất bại");
        console.log(error);
    }
}
export function* handleUpdateProduct({ type, payload }) {
    try {
        const response = yield call(requestUpdateProduct, { payload });
        if (response.data.success) {
            yield put(setProducts(response?.data?.products));
            toast.success("Cập nhật sản phẩm thành công");
        }
    } catch (error) {
        toast.success("Cập nhật sản phẩm thất bại");
        console.log(error);
    }
}
export function* handleDeleteProduct({ type, payload }) {
    try {
        const response = yield call(requestDeleteProduct, { payload });
        if (response.data.success) {
            toast.success("Xóa sản phẩm thành công");
        }
    } catch (error) {
        toast.success("Xóa sản phẩm thất bại");
        console.log(error);
    }
}
