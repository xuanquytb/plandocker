import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
// import logger from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(sagaMiddleware),
  // middleware: (gDM) => gDM().concat(logger, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
