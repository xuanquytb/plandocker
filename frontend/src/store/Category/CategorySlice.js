import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "category",
    initialState: {
        categorys: [],
        category: 0,
        loading: true,
    },
    reducers: {
        getCategorys: () => ({}),
        setCategorys: (state, actions) => ({
            ...state,
            categorys: actions.payload,
            loading: false,
        }),
    },
});

export const { getCategorys, setCategorys, getCategory, setCategory } = categorySlice.actions;

export default categorySlice.reducer;
