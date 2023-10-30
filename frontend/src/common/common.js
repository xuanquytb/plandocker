import axios from "axios";
import { DeviceUUID } from "device-uuid";
import { toast } from "react-toastify";

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

export const get = async (requestParams, options) => {
  if (window.navigator.onLine) {
    return await axios.get(requestParams.url, {
      params: requestParams.params,
      baseURL: DEFAULT_BASE_URL,
      timeout: options?.timeout || DEFAULT_TIMEOUT,
      headers: requestParams.headers || getHeaders(),
    });
  } else {
    toast.info("Mất kết nối Internet. Vui lòng kiểm tra lại đường truyền.");
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
      baseURL: DEFAULT_BASE_URL,
      timeout: options?.timeout || DEFAULT_TIMEOUT,
      headers: requestParams.headers || getHeaders(),
    });
  } else {
    toast.info("Mất kết nối Internet. Vui lòng kiểm tra lại đường truyền.");

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
      baseURL: DEFAULT_BASE_URL,
      timeout: options?.timeout || DEFAULT_TIMEOUT,
      headers: requestParams.headers || getHeaders(),
    });
  } else {
    toast.info("Mất kết nối Internet. Vui lòng kiểm tra lại đường truyền.");
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
      baseURL: DEFAULT_BASE_URL,
      timeout: options?.timeout || DEFAULT_TIMEOUT,
    });
  } else {
    toast.info("Mất kết nối Internet. Vui lòng kiểm tra lại đường truyền.");
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
      baseURL: DEFAULT_BASE_URL,
      timeout: options?.timeout || DEFAULT_TIMEOUT,
      headers: requestParams.headers || getHeaders(),
    });
  } else {
    toast.info("Mất kết nối Internet. Vui lòng kiểm tra lại đường truyền.");
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
    return await axios.delete(requestParams, {
      params: requestParams.params,
      baseURL: DEFAULT_BASE_URL,
      timeout: options?.timeout || DEFAULT_TIMEOUT,
      headers: requestParams.headers || getHeaders(),
    });
  } else {
    toast.info("Mất kết nối Internet. Vui lòng kiểm tra lại đường truyền.");
    return {
      data: {
        code: -1,
        message: "Mất kết nối Internet. Vui lòng kiểm tra lại đường truyền.",
      },
    };
  }
};
