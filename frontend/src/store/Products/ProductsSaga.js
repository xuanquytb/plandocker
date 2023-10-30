import { takeLatest } from "redux-saga/effects";
import { getProducts, getProductsSearch } from "./ProductSlice";
import { handleGetAllProduct, handleSearchAllProduct } from "./handleProducts";

export default function* ProductsSaga() {
    yield takeLatest(getProducts.type, handleGetAllProduct);
    yield takeLatest(getProductsSearch.type, handleSearchAllProduct);
}
