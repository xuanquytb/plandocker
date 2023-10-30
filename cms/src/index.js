import { React, lazy } from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";
import store from "./store/configureStore";
import { ToastContainer } from "react-toastify";

const container = document.getElementById("root");
const root = createRoot(container);
const LazyApp = lazy(() => import("./App"));

root.render(
  <Provider store={store}>
    <LazyApp />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
