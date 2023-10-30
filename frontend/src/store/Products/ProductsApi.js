import axios from "axios";
import { getDataAPINoAuth } from "../../common/api";

export function requestGetAllProduct() {
  return getDataAPINoAuth(
    `${process.env.REACT_APP_BACKEND}api/product/all`,
    {}
  );
}
export function requestSearchAllProduct(valueSearch) {
  return getDataAPINoAuth(
    `${process.env.REACT_APP_BACKEND}api/product/Search/${valueSearch}`,
    {}
  );
}

export function requestGetOneProduct(id) {
  return axios.request({
    method: "GET",
    url: `${process.env.REACT_APP_BACKEND}api/product/find/${id}`,
  });
}
export function requestGetAllProductByCate(id) {
  return axios.request({
    method: "GET",
    url: `${process.env.REACT_APP_BACKEND}api/product/findProByCate/${id}`,
  });
}
