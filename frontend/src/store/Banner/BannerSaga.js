import { takeLatest } from "redux-saga/effects";
import { getBanner } from "./BannerSlice";
import { handleGetAllBanner } from "./handleBanner";

export default function* BannerSaga() {
    yield takeLatest(getBanner.type, handleGetAllBanner);
}
