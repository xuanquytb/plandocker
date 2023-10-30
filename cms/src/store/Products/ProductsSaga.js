import { takeLatest } from "redux-saga/effects";
import { addProduct, deleteProduct, getProducts, getProductsSold, updateProduct } from "./ProductSlice";
import { handleAddProduct, handleDeleteProduct, handleGetAllProduct, handleGetAllProductSold, handleUpdateProduct } from "./handleProducts";

export default function* ProductsSaga() {
    yield takeLatest(getProducts.type, handleGetAllProduct);
    yield takeLatest(addProduct.type, handleAddProduct);
    yield takeLatest(deleteProduct.type, handleDeleteProduct);
    yield takeLatest(getProductsSold.type, handleGetAllProductSold);
    yield takeLatest(updateProduct.type, handleUpdateProduct);
}
