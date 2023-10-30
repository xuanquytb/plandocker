import { all, fork } from "redux-saga/effects";
import AuthSaga from "./Auth/AuthSaga";
import CategoryaSaga from "./Category/CategorySaga";
import ProductsSaga from "./Products/ProductsSaga";
import CardSaga from "./Card/CardSaga";
import PaymentSaga from "./Payment/PaymentSaga";
import OrderSaga from "./Order/OrderSaga";
import FavouriteSaga from "./Favourite/FavouriteSaga";
import BannerSaga from "./Banner/BannerSaga";

export default function* rootSaga() {
    yield all([
        fork(AuthSaga),
        fork(CategoryaSaga),
        fork(ProductsSaga),
        fork(CardSaga),
        fork(PaymentSaga),
        fork(OrderSaga),
        fork(FavouriteSaga),
        fork(BannerSaga),
    ]);
}
