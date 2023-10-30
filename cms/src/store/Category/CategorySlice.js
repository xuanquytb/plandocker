import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "category",
    initialState: {
        categorys: [],
        category: "",
        loading: true,
    },
    reducers: {
        getCategorys: () => ({}),
        setCategorys: (state, actions) => ({
            ...state,
            categorys: actions.payload,
            loading: false,
        }),
        addCategory: () => ({}),
        deleteCategory: () => ({}),
    },
});

export const { getCategorys, setCategorys, addCategory, deleteCategory } = categorySlice.actions;

export default categorySlice.reducer;
