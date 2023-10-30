import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/Auth/AuthSlice";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import "./styles.scss";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const from = "/";

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        dispatch(login());
        navigate(from, { replace: true });
      } catch (error) {
        console.log(error);
      }
    },
  });

  useEffect(() => {
    if (isLoggedIn) {
      navigate(from);
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="container-auth">
      <div className="login-card">
        <div className="login-card-logo">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="login-card-header">
          <h1>Đăng nhập</h1>
        </div>
        <form className="login-card-form" onSubmit={formik.handleSubmit}>
          <div className="form-item">
            {/* <span className='form-item-icon material-symbols-rounded'>mail</span> */}
            <input
              {...formik.getFieldProps("username")}
              type="text"
              placeholder="Email"
              id="emailForm"
              autoFocus
              required
            />
          </div>
          <div className="form-item">
            {/* <span className='form-item-icon material-symbols-rounded'>lock</span> */}
            <input
              {...formik.getFieldProps("password")}
              type="password"
              placeholder="Mật khẩu"
              id="passwordForm"
              required
            />
          </div>
          <div className="form-item-other">
            <div className="checkbox">
              <input type="checkbox" name="" id="rememberMeCheckbox" />
              <label htmlFor="rememberMeCheckbox">
                Lưu tài khoản và mật khẩu
              </label>
            </div>
            <a href="google.com">Quên mật khẩu!</a>
          </div>
          <button type="submit">Đăng nhập</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
