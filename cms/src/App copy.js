import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import PrivateRouter from "./Unitl/PrivateRouter";
import Layout from "./Components/Layout";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import UnAuthorization from "./pages/UnAuthorization/UnAuthorization";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { verify } from "./store/Auth/AuthSlice";
import { getProducts } from "./store/Products/ProductSlice";
import { getCategorys } from "./store/Category/CategorySlice";
import { getUserAdmin, getUserCustomer } from "./store/Account/AccountSlice";
import { getOrders } from "./store/Order/OrderSlice";
import Dashboard from "./pages/DashBoard/DashBoard";
import AdminContent from "./pages/User/AdminContent";

import Product from "./pages/QL_Product";
import CategoryContent from "./pages/QL_Category";
import ManufactureContent from "./pages/QL_Manufactory";
import OrderContent from "./pages/QL_Order";
import UserContent from "./pages/QL_Customer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(verify());
    dispatch(getCategorys());
    dispatch(getProducts());
    dispatch(getUserAdmin());
    dispatch(getOrders());
    dispatch(getUserCustomer());
  }, [dispatch]);
  return (
    <>
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
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public route */}
          <Route path="/login" element={<Login />} />
          <Route path="/unauthorization" element={<UnAuthorization />} />

          {/* private route */}
          <Route element={<PrivateRouter allowedRoles={[1]} />}>
            <Route
              path="/"
              element={
                <Home>
                  <Dashboard />
                </Home>
              }
            />
          </Route>
          <Route element={<PrivateRouter allowedRoles={[1]} />}>
            <Route
              path="/accountAdmin"
              element={
                <Home>
                  <AdminContent />
                </Home>
              }
            />
          </Route>
          <Route element={<PrivateRouter allowedRoles={[1]} />}>
            <Route
              path="/accountCustomer"
              element={
                <Home>
                  <UserContent />
                </Home>
              }
            />
          </Route>
          <Route element={<PrivateRouter allowedRoles={[1]} />}>
            <Route
              path="/product"
              element={
                <Home>
                  <Product />
                </Home>
              }
            />
          </Route>
          <Route element={<PrivateRouter allowedRoles={[1]} />}>
            <Route
              path="/categorys"
              element={
                <Home>
                  <CategoryContent />
                </Home>
              }
            />
          </Route>
          <Route element={<PrivateRouter allowedRoles={[1]} />}>
            <Route
              path="/manufacture"
              element={
                <Home>
                  <ManufactureContent />
                </Home>
              }
            />
          </Route>
          <Route element={<PrivateRouter allowedRoles={[1]} />}>
            <Route
              path="/order"
              element={
                <Home>
                  <OrderContent />
                </Home>
              }
            />
          </Route>
          {/* catch all */}
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
