import { call, put, select } from "redux-saga/effects";
import {
  requestGetAllProduct,
  requestGetOneProduct,
  requestSearchAllProduct,
} from "./ProductsApi";
import { setProduct, setProducts, setProductsSearch } from "./ProductSlice";

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

export function* handleSearchAllProduct() {
  let query = "";
  try {
    query = yield select((state) => state.products.params);

    if (query !== "") {
      const response = yield call(requestSearchAllProduct, query);

      if (response.status === 200) {
        yield put(setProductsSearch(response.data?.products));
      }
    }
  } catch (error) {
    console.log("errs");
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
