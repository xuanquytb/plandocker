import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./Auth/AuthSlice";
import CategorySlice from "./Category/CategorySlice";
import ProductSlice from "./Products/ProductSlice";
import CardSlice from "./Card/CardSlice";
import PaymentSlice from "./Payment/PaymentSlice";
import OrderSlice from "./Order/OrderSlice";
import FavouriteSlice from "./Favourite/FavouriteSlice";
import BannerSlice from "./Banner/BannerSlice";

export const reducer = combineReducers({
    auth: AuthSlice,
    category: CategorySlice,
    products: ProductSlice,
    card: CardSlice,
    payments: PaymentSlice,
    orders: OrderSlice,
    favourite: FavouriteSlice,
    banners: BannerSlice,
});
