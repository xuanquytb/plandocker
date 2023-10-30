import axios from "axios";
import {
  deleteDataAPI,
  getDataAPI,
  postDataAPI,
  putData,
} from "../../common/api";

export function requestGetAllProduct() {
  return getDataAPI(`${process.env.REACT_APP_BACKEND}api/product/all`, {});
}
export function requestGetAllProductSold() {
  return getDataAPI(
    `${process.env.REACT_APP_BACKEND}api/product/allProductSold`,
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

export function requestAddProduct(params) {
  return postDataAPI(`${process.env.REACT_APP_BACKEND}api/product/addProduct`, {
    ...params.payload,
  });
}
export function requestUpdateProduct(params) {
  console.log(params);
  return putData(
    `${process.env.REACT_APP_BACKEND}api/product/updateProduct/${params?.payload.id}`,
    {
      ...params.payload,
    }
  );
}

export function requestDeleteProduct(params) {
  return deleteDataAPI(
    `${process.env.REACT_APP_BACKEND}api/product/${params.payload}`,
    {}
  );
}
