import { call, put } from "redux-saga/effects";

import { setBanner } from "./BannerSlice";
import { requestGetAllBanner } from "./BannerApi";

export function* handleGetAllBanner() {
    try {
        const response = yield call(requestGetAllBanner);
        if (response.data.success) {
            yield put(setBanner(response?.data?.banner));
        }
    } catch (error) {
        console.log(error);
    }
}
