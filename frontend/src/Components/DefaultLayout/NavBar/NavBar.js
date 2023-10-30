import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

const NavBar = () => {
  const { categorys } = useSelector((state) => state.category);
  const navigate = useNavigate();

  const handScrool = (location) => {
    scroller.scrollTo(`box_displays${location}`, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <div className="slide1 row no-gutters slide1-menu">
      <div className="slide1__category col l-3 m-0 c-0">
        <div className="slide1__category-header">
          <h3 style={{ fontSize: 18, height: 30, padding: 5 }}>
            <i className="slide1__category-header-icon fa-solid fa-bars-staggered"></i>
            Danh mục
          </h3>
        </div>
        <ul className="slide1__category-list">
          {categorys?.map((item) => {
            return (
              <li
                className="slide1__category-item"
                key={item.id}
                onClick={() => {
                  navigate(`/category`, { state: { id: item.id } });
                }}
              >
                <div className="slide1__category-item-link">
                  <img
                    src="/images/container/slide1/icon category/bedding.png"
                    alt=""
                    className="slide1__category-item-icon"
                  />
                  <span>{item.nameCategory}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="slide1__content col l-9 m-11 c-11">
        <div className="slide1__content-sidebar col l-12 m-0 c-0">
          <ul className="slide1__content-sidebar-list">
            <li className="slide1__content-sidebar-item">
              <div className="slide1__content-sidebar-item-link slide1__content-sidebar-item-link--current">
                <i className="slide1__content-sidebar-item-icon fa-solid fa-earth-africa"></i>
                <span>HOME</span>
              </div>
              <ul className="slide1__sidebar-home-list">
                {categorys?.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="slide1__sidebar-home-item"
                      to={`box_displays${item.id}`}
                      onClick={() => {
                        handScrool(item.id);
                      }}
                    >
                      <div className="slide1__sidebar-home-link">
                        {item.nameCategory}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li className="slide1__content-sidebar-item">
              <div className="slide1__content-sidebar-item-link slide1__content-sidebar-item-link--current">
                <i className="slide1__content-sidebar-item-icon fa-solid fa-earth-africa"></i>
                <span>Giới thiệu</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="slide1__content-home m-12 c-12">
          <div className="slide1__content-home-content">
            <span>Awesome Sense</span>
            <h3>Thêm yêu vẻ đẹp chính mình</h3>
            <form action="">
              <button className="slide1__content-home-content-btn slide1__content-home-content-btn--current">
                XEM THÊM
              </button>
              <button className="slide1__content-home-content-btn">
                MUA NGAY
              </button>
            </form>
            <div className="slide1__content-home-content-page "></div>
            <div className="slide1__content-home-content-page "></div>
            <div className="slide1__content-home-content-page slide1__content-home-content-page-lar slide1__content-home-content-page--current"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
