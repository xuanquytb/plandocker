import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
    name: "account",
    initialState: {
        userAdmin: {},
        userCustomer: {},
        logging: true,
    },
    reducers: {
        getUserAdmin: (state) => ({ ...state }),
        getUserCustomer: (state) => ({ ...state }),
        setUserAdmin: (state, actions) => ({
            ...state,
            logging: false,
            userAdmin: actions.payload,
        }),
        setUserCustomer: (state, actions) => ({
            ...state,
            logging: false,
            userCustomer: actions.payload,
        }),
    },
});

export const { getUserAdmin, setUserAdmin, getUserCustomer, setUserCustomer } = accountSlice.actions;

export default accountSlice.reducer;
