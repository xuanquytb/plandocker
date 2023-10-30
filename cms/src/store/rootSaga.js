import { all, fork } from "redux-saga/effects";
import AuthSaga from "./Auth/AuthSaga";
import ProductsSaga from "./Products/ProductsSaga";
import CategoryaSaga from "./Category/CategorySaga";
import AccountSaga from "./Account/AccountSaga";
import OrderSaga from "./Order/OrderSaga";

export default function* rootSaga() {
    yield all([fork(AuthSaga), fork(ProductsSaga), fork(CategoryaSaga), fork(AccountSaga), fork(OrderSaga)]);
}
