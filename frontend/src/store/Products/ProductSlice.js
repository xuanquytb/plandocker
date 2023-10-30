import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        product: {},
        params: "",
        productsSearch: [],
        loading: true,
    },
    reducers: {
        getProducts: () => ({}),
        getProductsSearch: (state) => ({ ...state }),
        setProducts: (state, actions) => ({
            ...state,
            products: actions.payload,
            loading: false,
        }),
        setProduct: (state, actions) => ({
            ...state,
            product: actions.payload,
        }),
        setProductsSearch: (state, actions) => ({
            ...state,
            productsSearch: actions.payload,
        }),
        setParams: (state, actions) => ({
            ...state,
            params: actions.payload,
        }),
    },
});

export const { getProducts, setProducts, setProduct, setProductsSearch, getProductsSearch, setParams } = productSlice.actions;

export default productSlice.reducer;
