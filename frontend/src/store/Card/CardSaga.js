import { takeLatest } from "redux-saga/effects";
import {
  handleDeleteCardDetail,
  handleGetAllCard,
  handleGetSumMoneyCard,
} from "./handleCard";
import { deleteCardDetail, getCard, getSumMoneyCard } from "./CardSlice";

export default function* CardSaga() {
  yield takeLatest(getCard.type, handleGetAllCard);
  yield takeLatest(getSumMoneyCard.type, handleGetSumMoneyCard);
  yield takeLatest(deleteCardDetail.type, handleDeleteCardDetail);
}
