import { deleteAPI, get, getNoAuth, post, postNoAuth, putUploadData } from "./common";

export const getDataAPI = (url, params) => {
    return get({
        url,
        params,
    });
};
export const getDataAPINoAuth = (url, params) => {
    return getNoAuth({
        url,
        params,
    });
};

export const postDataAPI = (url, params) => {
    return post({
        url,
        params,
    });
};
export const postDataAPINoAuth = (url, params) => {
    return postNoAuth({
        url,
        params,
    });
};

export const putData = (url, params) => {
    return putUploadData({
        url,
        params,
    });
};

export const deleteDataAPI = (url, params) => {
    return deleteAPI({
        url,
        params,
    });
};
