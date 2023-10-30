import { takeLatest } from "redux-saga/effects";
import { handleGetDataCustomer, handleGetDataUser } from "./handleAccount";
import { getUserAdmin, getUserCustomer } from "./AccountSlice";

export default function* AccountSaga() {
    yield takeLatest(getUserAdmin.type, handleGetDataUser);
    yield takeLatest(getUserCustomer.type, handleGetDataCustomer);
    // yield takeLatest(verify.type, handleVerify);
}
