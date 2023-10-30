import { getDataAPI, postDataAPI } from "../../common/api";

export function requestGetAllFavourite() {
  return getDataAPI(`${process.env.REACT_APP_BACKEND}api/favourite/all`, {});
}
export function requestCheckFavourite(params) {
  return postDataAPI(
    `${process.env.REACT_APP_BACKEND}api/favourite/check-favourite`,
    { ...params }
  );
}
