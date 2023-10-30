import { createSlice } from "@reduxjs/toolkit";

const bannerSlice = createSlice({
    name: "banner",
    initialState: {
        banner: [],
        loading: true,
    },
    reducers: {
        getBanner: () => ({}),
        setBanner: (state, actions) => ({
            ...state,
            banner: actions.payload,
            loading: false,
        }),
    },
});

export const { getBanner, setBanner } = bannerSlice.actions;

export default bannerSlice.reducer;
