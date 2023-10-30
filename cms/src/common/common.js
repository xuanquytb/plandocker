import axios from "axios";
import { DeviceUUID } from "device-uuid";

let isAlreadyFetchingAccessToken = false;
let subscribers = [];
export const DEFAULT_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const DEFAULT_TIMEOUT = 60000;

const getHeaders = () => {
  return {
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    deviceid: new DeviceUUID().get(),
    context: window.location.pathname,
  };
};

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // ** const { config, response: { status } } = error
    const { config, response } = error;
    const originalRequest = config;

    // ** if (status === 401) {
    // const status = error.response ? error.response.status : null;
    if (response && response.status === 401) {
      if (!isAlreadyFetchingAccessToken) {
        isAlreadyFetchingAccessToken = true;
        let refresh = localStorage.getItem("refresh_token");
        axios
          .post(DEFAULT_BASE_URL + "/api/common/v1/getAccessToken", null, {
            headers: {
              "Content-Type": "application/json",
              refeshToken: refresh,
            },
          })
          .then((r) => {
            if (r.data?.code === 200) {
              isAlreadyFetchingAccessToken = false;
              localStorage.setItem("accessToken", r.data);
              localStorage.setItem("access_token", r.data?.data);
              onAccessTokenFetched(r.data.accessToken);
            }
          });
      }
      const retryOriginalRequest = new Promise((resolve) => {
        addSubscriber((accessToken) => {
          originalRequest.headers.Authorization = `Bearer ${localStorage.getItem(
            "access_token"
          )}`;
          resolve(axios(originalRequest));
        });
      });
      return retryOriginalRequest;
    }
    return Promise.reject(error);
  }
);

const onAccessTokenFetched = (accessToken) => {
  subscribers = subscribers.filter((callback) => callback(accessToken));
};

const addSubscriber = (callback) => {
  subscribers.push(callback);
};

export const get = async (requestParams, options) => {
  if (window.navigator.onLine) {
    return await axios.get(requestParams.url, {
      params: requestParams.params,
      baseURL: requestParams.baseURL || DEFAULT_BASE_URL,
      timeout: options?.timeout || DEFAULT_TIMEOUT,
      headers: requestParams.headers || getHeaders(),
    });
  } else {
    return {
      data: {
        code: -1,
        message: "Mất kết nối Internet. Vui lòng kiểm tra lại đường truyền.",
      },
    };
  }
};
export const getNoAuth = async (requestParams, options) => {
  if (window.navigator.onLine) {
    return await axios.get(requestParams.url, {
      params: requestParams.params,
      baseURL: requestParams.baseURL || DEFAULT_BASE_URL,
      timeout: options?.timeout || DEFAULT_TIMEOUT,
      headers: requestParams.headers || getHeaders(),
    });
  } else {
    return {
      data: {
        code: -1,
        message: "Mất kết nối Internet. Vui lòng kiểm tra lại đường truyền.",
      },
    };
  }
};

export const post = async (requestParams, options) => {
  if (window.navigator.onLine) {
    return await axios.post(requestParams.url, requestParams.params, {
      // params: requestParams.params,
      baseURL: requestParams.baseURL || DEFAULT_BASE_URL,
      timeout: options?.timeout || DEFAULT_TIMEOUT,
      headers: requestParams.headers || getHeaders(),
    });
  } else {
    return {
      data: {
        code: -1,
        message: "Mất kết nối Internet. Vui lòng kiểm tra lại đường truyền.",
      },
    };
  }
};
export const postNoAuth = async (requestParams, options) => {
  if (window.navigator.onLine) {
    return await axios.post(requestParams.url, requestParams.params, {
      // params: requestParams.params,
      baseURL: requestParams.baseURL || DEFAULT_BASE_URL,
      timeout: options?.timeout || DEFAULT_TIMEOUT,
    });
  } else {
    return {
      data: {
        code: -1,
        message: "Mất kết nối Internet. Vui lòng kiểm tra lại đường truyền.",
      },
    };
  }
};

export const putUploadData = async (requestParams, options) => {
  if (window.navigator.onLine) {
    return await axios.put(requestParams.url, requestParams.params, {
      baseURL: requestParams.baseURL || DEFAULT_BASE_URL,
      timeout: options?.timeout || DEFAULT_TIMEOUT,
      headers: requestParams.headers || getHeaders(),
    });
  } else {
    return {
      data: {
        code: -1,
        message: "Mất kết nối Internet. Vui lòng kiểm tra lại đường truyền.",
      },
    };
  }
};

export const deleteAPI = async (requestParams, options) => {
  if (window.navigator.onLine) {
    return await axios.delete(requestParams.url, {
      params: requestParams.params,
      baseURL: requestParams.baseURL || DEFAULT_BASE_URL,
      timeout: options?.timeout || DEFAULT_TIMEOUT,
      headers: requestParams.headers || getHeaders(),
    });
  } else {
    return {
      data: {
        code: -1,
        message: "Mất kết nối Internet. Vui lòng kiểm tra lại đường truyền.",
      },
    };
  }
};
