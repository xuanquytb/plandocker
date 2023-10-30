import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        productSold: [],
        products: [],
        product: {},
        loading: true,
    },
    reducers: {
        getProducts: () => ({}),
        getProductsSold: (state) => ({ ...state }),
        setProducts: (state, actions) => ({
            ...state,
            products: actions.payload,
            loading: false,
        }),
        setProductsSold: (state, actions) => ({
            ...state,
            productSold: actions.payload,
        }),
        setProduct: (state, actions) => ({
            ...state,
            product: actions.payload,
        }),
        addProduct: (state) => ({
            ...state,
        }),
        deleteProduct: (state) => ({
            ...state,
        }),
        updateProduct: (state) => ({
            ...state,
        }),
    },
});

export const { getProducts, setProducts, setProduct, addProduct, deleteProduct, getProductsSold, setProductsSold, updateProduct } =
    productSlice.actions;

export default productSlice.reducer;
