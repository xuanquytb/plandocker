import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
    name: "favourite",
    initialState: {
        favourite: [],
        loading: true,
    },
    reducers: {
        getFavourite: () => ({}),
        setFavourite: (state, actions) => ({
            ...state,
            favourite: actions.payload,
            loading: false,
        }),
    },
});

export const { getFavourite, setFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;
