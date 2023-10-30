import { takeLatest } from "redux-saga/effects";
import { getFavourite } from "./FavouriteSlice";
import { handleGetAllFavourite } from "./handleFavourite";

export default function* FavouriteSaga() {
    yield takeLatest(getFavourite.type, handleGetAllFavourite);
}
