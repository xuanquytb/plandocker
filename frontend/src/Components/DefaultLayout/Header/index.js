import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import { logout } from "../../../store/Auth/AuthSlice";
import { debounce } from "lodash";
import {
  getProductsSearch,
  setParams,
} from "../../../store/Products/ProductSlice";
import { Avatar, Space } from "antd";
import { converseMoney } from "../../../common/strings";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { cards } = useSelector((state) => state.card);

  const handleChange = debounce((e) => {
    dispatch(setParams(e.target.value));
    dispatch(getProductsSearch());
  }, 1000);

  return (
    <>
      <header className="header grid wide">
        <div className="header__nav row">
          <div className="header__nav-left l-8 m-9 c-8"></div>
          <div className="header__nav-right l-4 m-0 c-0">
            <ul className="header__right-list">
              {user ? (
                <li className="header__right-item btn-account">
                  <div className="header__right-item-link ">
                    <Space size={16} wrap>
                      {user?.nameAvata ? (
                        <Avatar
                          src={
                            <img
                              src={`${process.env.REACT_APP_BACKEND}api/user/${user?.nameAvata}`}
                              size={10}
                              alt="avatar"
                            />
                          }
                        />
                      ) : (
                        <Avatar
                          style={{ backgroundColor: "#87d068" }}
                          icon={<UserOutlined />}
                        />
                      )}
                      {user?.username}
                    </Space>
                  </div>
                  <div className="box-action-user">
                    <div
                      className="box-btn-action"
                      onClick={() => {
                        navigate("/profile");
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          d="M14.256 21.744L12 24l-2.256-2.256C5.31 20.72 2 16.744 2 12 2 6.48 6.48 2 12 2s10 4.48 10 10c0 4.744-3.31 8.72-7.744 9.744zm-8.233-6.328C7.491 17.606 9.695 19 12.16 19c2.464 0 4.669-1.393 6.136-3.584A8.968 8.968 0 0 0 12.16 13a8.968 8.968 0 0 0-6.137 2.416zM12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                          fill="rgba(149,164,166,1)"
                        />
                      </svg>
                      <span style={{ paddingRight: 8, marginLeft: 8 }}>
                        Tài khoản
                      </span>
                    </div>
                    <div
                      className="box-btn-action"
                      onClick={() => {
                        navigate("/myorder");
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          d="M3 10H2V4.003C2 3.449 2.455 3 2.992 3h18.016A.99.99 0 0 1 22 4.003V10h-1v10.001a.996.996 0 0 1-.993.999H3.993A.996.996 0 0 1 3 20.001V10zm16 0H5v9h14v-9zM4 5v3h16V5H4zm5 7h6v2H9v-2z"
                          fill="rgba(149,164,166,1)"
                        />
                      </svg>
                      <span style={{ paddingRight: 8, marginLeft: 8 }}>
                        Đơn hàng
                      </span>
                    </div>
                    <div
                      className="box-btn-action"
                      onClick={() => {
                        navigate("/favourite");
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                      >
                        <path fill="none" d="M0 0H24V24H0z" />
                        <path
                          d="M19 14v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm1.243-9.243c2.16 2.166 2.329 5.557.507 7.91C19.926 12.24 18.99 12 18 12c-3.314 0-6 2.686-6 6 0 1.009.249 1.96.689 2.794l-.69.691-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228 2.349-2.109 5.979-2.039 8.242.228z"
                          fill="rgba(149,164,166,1)"
                        />
                      </svg>
                      <span style={{ paddingRight: 8, marginLeft: 8 }}>
                        Yêu thích
                      </span>
                    </div>
                    <div
                      className="box-btn-action"
                      onClick={() => {
                        window.localStorage.removeItem("accessToken");
                        dispatch(logout());
                        navigate("/login");
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          d="M10 11H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8h6v3l5-4-5-4v3z"
                          fill="rgba(149,164,166,1)"
                        />
                      </svg>
                      <span style={{ marginLeft: 8 }}>Đăng xuất</span>
                    </div>
                  </div>
                </li>
              ) : (
                <li
                  className="header__right-item"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  <div className="header__right-item-link">
                    <i className="fa-solid fa-unlock"></i>
                    Đăng nhập
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="strikethrough"></div>
        <div className="header__search row">
          <div
            className="header__search-logo col l-3 m-9 c-9"
            style={{ maxWidth: "9%" }}
            onClick={() => {
              navigate("/");
            }}
          >
            <div className="header__search-logo-link">
              <img
                src="/images/logo.png"
                alt=""
                className="header__search-logo-img"
              />
            </div>
          </div>
          <div className="header__search-search col l-6 m-0 c-0">
            <form className="header__search-search-form" action="">
              <input
                className="header__search-search-input"
                type="text"
                placeholder="Bạn muốn tìm kiếm sản phẩm ..."
                id="search"
                onChange={handleChange}
              />
              <label
                className="header__search-search-icon"
                htmlFor="search"
                onClick={() => {
                  navigate("/search");
                }}
              >
                <div className="header__search-search-icon-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 3a5 5 0 1 1-4.78 3.527A2.499 2.499 0 0 0 12 9.5a2.5 2.5 0 0 0-1.473-2.28c.466-.143.96-.22 1.473-.22z"
                      fill="rgba(149,164,166,1)"
                    />
                  </svg>
                </div>
              </label>
            </form>
          </div>
          <div className="header__search-tell col l-2 m-0 c-0">
            <div className="header__search-tell-link">
              <img
                src="/images/header/contact/phone.png"
                alt=""
                className="header__search-tell-img"
              />
              <div className="header__search-tell-text">
                <h1>Liên hệ</h1>
                <span>(+84).9999.8943</span>
              </div>
            </div>
          </div>
          <div className="header__search-cart col l-1 m-3 c-3">
            <div className="header__search-cart-link">
              <img
                src="/images//header/contact/cart.png"
                alt=""
                className="header__search-cart-img"
              />
              <div className="header__search-cart-text">
                <h1>Giỏ hàng</h1>
                <p>{cards?.length} sản phẩm</p>
              </div>
            </div>
            <div className="header__search-cart-list">
              <h1>Giỏ hàng</h1>
              {cards?.length === 0 ? (
                <>
                  <span>Giỏ hàng trống</span>
                </>
              ) : (
                <div className="list-cards-items">
                  <ul>
                    {cards?.map((item) => {
                      return (
                        <li className="box-cards-item" key={item.id}>
                          <div className="cards-item">
                            <div>
                              <img
                                className="image-product"
                                src={`${process.env.REACT_APP_BACKEND}api/procucts/${item.image}`}
                                alt=""
                              />
                            </div>

                            <div className="des-product">
                              <p className="hind-text-dot-2">
                                <strong>{item?.nameProduct}</strong>
                              </p>
                              <div
                                style={{
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "space-between",
                                  marginTop: 10,
                                }}
                              >
                                <p>
                                  Đơn giá :{" "}
                                  {converseMoney(
                                    item.price,
                                    country.statusExChange
                                  )}
                                </p>
                                <p>X {item.quantity}</p>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
              <div
                className="box-checkout"
                onClick={() => {
                  navigate("/checkout");
                }}
              >
                <button>Xem giỏ hàng</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
