import { call, put } from "redux-saga/effects";
import { requestGetDataCustomer, requestGetDataUser } from "./AccountApi";
import { setUserAdmin, setUserCustomer } from "./AccountSlice";

export function* handleGetDataUser({ type, payload }) {
    try {
        const response = yield call(requestGetDataUser);
        if (response.data.success) {
            yield put(setUserAdmin(response?.data?.user));
        } else {
            console.log("Lỗi");
        }
    } catch (error) {
        console.log(error);
    }
}
export function* handleGetDataCustomer({ type, payload }) {
    try {
        const response = yield call(requestGetDataCustomer);
        if (response.data.success) {
            yield put(setUserCustomer(response?.data?.users));
        } else {
            console.log("Lỗi");
        }
    } catch (error) {
        console.log(error);
    }
}

// export function* handleVerify({ type, payload }) {
//     try {
//         const response = yield call(requestVerify);
//         if (response.data.success) {
//             yield put(loginSuccess(response?.data?.user));
//             window.localStorage.setItem("accessToken", response?.data?.token);
//         } else {
//             window.localStorage.removeItem("accessToken");
//             yield put(loginFailed());
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }
