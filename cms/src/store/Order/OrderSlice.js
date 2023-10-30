import { createSlice } from "@reduxjs/toolkit";

const OrdersSlice = createSlice({
    name: "orders",
    initialState: {
        orders: [],
        sumMoney: 0,
        sumMoneyToday: 0,
    },
    reducers: {
        getOrders: () => ({}),
        getSumMoney: () => ({}),
        getSumMoneyToday: () => ({}),

        createOrder: () => ({}),
        updateOrder: () => ({}),

        setOrders: (state, actions) => ({
            ...state,
            orders: actions.payload,
        }),
        setSumMoney: (state, actions) => ({
            ...state,
            sumMoney: actions.payload,
        }),
        setSumMoneyToday: (state, actions) => ({
            ...state,
            sumMoneyToday: actions.payload,
        }),
    },
});

export const { getOrders, setOrders, createOrder, updateOrder, getSumMoney, setSumMoney, getSumMoneyToday, setSumMoneyToday } = OrdersSlice.actions;

export default OrdersSlice.reducer;
