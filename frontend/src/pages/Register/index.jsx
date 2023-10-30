import React, { useEffect } from "react";

import "./styles.scss"
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../store/Auth/AuthSlice";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoggedIn } = useSelector((state) => state.auth);
    const from =  "/";


    useEffect(() => {
        if (isLoggedIn) {
            navigate(from);
        }
    }, [isLoggedIn]);

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            email: "",
            phone: ""
        },
        onSubmit: async (values) => {
            try {
                dispatch(register({ ...values }))
                navigate(from, { replace: true });
            } catch (error) {
                console.log(error);
            }
        },
    });



    return (
        <div className='container-auth'>
            <div className='login-card'>
                <div className='login-card-logo'>
                    <img src="/images/logo.png" alt='logo' />
                </div>
                <div className='login-card-header'>
                    <h1>Đăng ký</h1>
                </div>
                <form className='login-card-form' onSubmit={formik.handleSubmit}>
                    <div className='form-item'>
                        <input {...formik.getFieldProps("email")} type='text' placeholder='Email' id='emailForm' autoFocus required />
                    </div>
                    <div className='form-item'>
                        <input {...formik.getFieldProps("phone")} type='text' placeholder='Số điện thoại' id='phoneForm' required />
                    </div>
                    <div className='form-item'>
                        <input {...formik.getFieldProps("fullname")} type='text' placeholder='Tên tài khoản' id='fullnameForm' required />
                    </div>
                    <div className='form-item'>
                        <input {...formik.getFieldProps("username")} type='text' placeholder='Tên đăng nhập' id='usernameForm' required />
                    </div>
                    <div className='form-item'>
                        <input {...formik.getFieldProps("password")} type='password' placeholder='Mật khẩu' id='passwForm' required />
                    </div>
                    <div className='form-item-other'>
                        <div className='checkbox'>
                            <input type='checkbox' name='' id='rememberMeCheckbox' />
                            <label htmlFor='rememberMeCheckbox'>Lưu tài khoản và mật khẩu</label>
                        </div>
                        <a href='google.com'>Quên mật khẩu!</a>
                    </div>
                    <button type='submit'>Đăng ký</button>
                </form>
                <div className='login-card-footer'>
                    <span>Đã có tài khoản?</span> <Link to={"/login"}>Đăng nhập.</Link>
                </div>
            </div>
            <div className='login-card-social'>
                <div>Đăng nhập với</div>
                <div className='login-card-social-btns'>
                    <a href='google.com'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='icon icon-tabler icon-tabler-brand-facebook'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            stroke-width='2'
                            stroke='currentColor'
                            fill='none'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                        >
                            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                            <path d='M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3'></path>
                        </svg>
                    </a>
                    <a href='google.com'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='icon icon-tabler icon-tabler-brand-google'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            stroke-width='3'
                            stroke='currentColor'
                            fill='none'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                        >
                            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                            <path d='M17.788 5.108a9 9 0 1 0 3.212 6.892h-8'></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Register;
