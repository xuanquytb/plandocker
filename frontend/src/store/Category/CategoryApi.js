import axios from "axios";

export function requestGetAllCate() {
  return axios.request({
    method: "GET",
    url: `${process.env.REACT_APP_BACKEND}api/category/all`,
  });
}
