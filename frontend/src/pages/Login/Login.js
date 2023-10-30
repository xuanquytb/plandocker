import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/Auth/AuthSlice";
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import "./styles.scss";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const from = "/";

  useEffect(() => {
    if (isLoggedIn) {
      navigate(from);
    }
  }, [isLoggedIn]);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        dispatch(login({ ...values }));
        if (isLoggedIn) {
          navigate(from, { replace: true });
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div>
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
          <div className="login-card-footer">
            <span>Không có tài khoản?</span>{" "}
            <Link to="/dang-ky">Tạo tài khoản.</Link>
          </div>
        </div>
        <div className="login-card-social">
          <div>Đăng nhập với</div>
          <div className="login-card-social-btns">
            <a href="google.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-facebook"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
              </svg>
            </a>
            <a href="google.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-google"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
