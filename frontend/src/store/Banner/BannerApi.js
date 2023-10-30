import { getDataAPI } from "../../common/api";

export function requestGetAllBanner() {
  return getDataAPI(`${process.env.REACT_APP_BACKEND}api/banner/all`, {});
}
