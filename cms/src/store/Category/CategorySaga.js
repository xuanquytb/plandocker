import { takeLatest } from "redux-saga/effects";
import { addCategory, deleteCategory, getCategorys } from "./CategorySlice";
import { handleAddCategory, handleDeleteCategory, handleGetAllCate } from "./handleCategory";

export default function* CategoryaSaga() {
    yield takeLatest(getCategorys.type, handleGetAllCate);
    yield takeLatest(addCategory.type, handleAddCategory);
    yield takeLatest(deleteCategory.type, handleDeleteCategory);
}
