import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./Auth/AuthSlice";
import ProductsSlice from "./Products/ProductSlice";
import CategorySlice from "./Category/CategorySlice";
import AccountSlice from "./Account/AccountSlice";
import OrdersSlice from "./Order/OrderSlice";

export const reducer = combineReducers({
    auth: AuthSlice,
    products: ProductsSlice,
    category: CategorySlice,
    account: AccountSlice,
    orders: OrdersSlice,
});

export default reducer;
