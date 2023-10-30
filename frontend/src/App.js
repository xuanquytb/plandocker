import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import PrivateRouter from "./Unitl/PrivateRouter";
import Layout from "./Components/Layout";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import UnAuthorization from "./pages/UnAuthorization/UnAuthorization";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { verify } from "./store/Auth/AuthSlice";
import DefaultLayout from "./Components/DefaultLayout";

import { getProducts } from "./store/Products/ProductSlice";
import { getCategorys } from "./store/Category/CategorySlice";
import { getCard } from "./store/Card/CardSlice";
import { getOrders } from "./store/Order/OrderSlice";
import { getBanner } from "./store/Banner/BannerSlice";
import { getPayment } from "./store/Payment/PaymentSlice";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import CardDetail from "./pages/CardDetail/CardDetail";
import Payment from "./pages/Payment";
import MyOrder from "./pages/MyOrder";
import Favourite from "./pages/Favourite/Favourite";
import CategorysProd from "./pages/CategorysProd/CategorysProd";
import Search from "./pages/Search/Search";
import Register from "./pages/Register";

function App() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(verify());
  }, [isLoggedIn]);

  useEffect(() => {
    dispatch(verify());
    dispatch(getCategorys());
    dispatch(getProducts());
    dispatch(getCard());
    dispatch(getPayment());
    dispatch(getOrders());
    dispatch(getBanner());
  }, [dispatch]);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public route */}
          <Route path="/login" element={<Login />} />
          <Route path="/dang-ky" element={<Register />} />
          <Route path="/unauthorization" element={<UnAuthorization />} />
          <Route
            path="/product/:id"
            element={
              <DefaultLayout isNav={false} isFooterTag={false}>
                <ProductDetail />
              </DefaultLayout>
            }
          />

          <Route
            path="/"
            element={
              <DefaultLayout>
                <Home />
              </DefaultLayout>
            }
          />
          <Route
            path="/category"
            element={
              <DefaultLayout isNav={false} isFooterTag={false}>
                <CategorysProd />
              </DefaultLayout>
            }
          />
          <Route
            path="/search"
            element={
              <DefaultLayout isNav={false} isFooterTag={false}>
                <Search />
              </DefaultLayout>
            }
          />
          {/* private route */}
          <Route element={<PrivateRouter allowedRoles={[2]} />}>
            <Route
              path="/checkout"
              element={
                <DefaultLayout
                  isNav={false}
                  isFooterTag={false}
                  isFooter={false}
                >
                  <CardDetail />
                </DefaultLayout>
              }
            />
          </Route>
          <Route element={<PrivateRouter allowedRoles={[2]} />}>
            <Route
              path="/payment"
              element={
                <DefaultLayout
                  isNav={false}
                  isFooterTag={false}
                  isFooter={false}
                >
                  <Payment />
                </DefaultLayout>
              }
            />
          </Route>
          <Route element={<PrivateRouter allowedRoles={[2]} />}>
            <Route
              path="/myorder"
              element={
                <DefaultLayout
                  isNav={false}
                  isFooterTag={false}
                  isFooter={false}
                >
                  <MyOrder />
                </DefaultLayout>
              }
            />
          </Route>
          <Route element={<PrivateRouter allowedRoles={[2]} />}>
            <Route
              path="/favourite"
              element={
                <DefaultLayout isNav={false} isFooterTag={false}>
                  <Favourite />
                </DefaultLayout>
              }
            />
          </Route>
          <Route element={<PrivateRouter allowedRoles={[2]} />}>
            <Route path="/profile" element={<Profile />} />
          </Route>

          {/* catch all */}
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
