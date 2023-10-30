import { takeLatest } from "redux-saga/effects";
import { getCategorys } from "./CategorySlice";
import { handleGetAllCate } from "./handleCategory";

export default function* CategoryaSaga() {
    yield takeLatest(getCategorys.type, handleGetAllCate);
}
