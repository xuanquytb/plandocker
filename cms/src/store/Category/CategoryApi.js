import axios from "axios";
import { deleteDataAPI, postDataAPI } from "../../common/api";

export function requestGetAllCate() {
  return axios.request({
    method: "GET",
    url: `${process.env.REACT_APP_BACKEND}api/category/all`,
  });
}
export function requestAddCategory(params) {
  return postDataAPI(
    `${process.env.REACT_APP_BACKEND}api/category/addCategory`,
    {
      ...params.payload,
    }
  );
}

export function requestDeleteCategory(params) {
  return deleteDataAPI(
    `${process.env.REACT_APP_BACKEND}api/category/${params.payload}`,
    {}
  );
}
