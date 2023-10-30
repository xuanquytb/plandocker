import { createSlice } from "@reduxjs/toolkit";

const OrdersSlice = createSlice({
    name: "orders",
    initialState: {
        orders: [],
    },
    reducers: {
        getOrders: () => ({}),
        createOrder: () => ({}),

        setOrders: (state, actions) => ({
            ...state,
            orders: actions.payload,
        }),
    },
});

export const { getOrders, setOrders, createOrder } = OrdersSlice.actions;

export default OrdersSlice.reducer;
