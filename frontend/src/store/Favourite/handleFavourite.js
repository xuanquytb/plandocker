import { call, put } from "redux-saga/effects";
import { requestGetAllFavourite } from "./FavouriteApi";
import { setFavourite } from "./FavouriteSlice";

export function* handleGetAllFavourite() {
    try {
        const response = yield call(requestGetAllFavourite);
        if (response.data.success) {
            yield put(setFavourite(response?.data?.favourite));
        }
    } catch (error) {
        console.log(error);
    }
}
