import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
    name: "payment",
    initialState: {
        payments: [],
    },
    reducers: {
        getPayment: () => ({}),

        setPayment: (state, actions) => ({
            ...state,
            payments: actions.payload,
        }),
    },
});

export const { getPayment, setPayment } = paymentSlice.actions;

export default paymentSlice.reducer;
