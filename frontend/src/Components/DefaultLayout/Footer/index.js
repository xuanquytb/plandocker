import React from "react";

const Footer = () => {
  return (
    <footer
      className="footer grid wide"
      style={{ minWidth: "100vw", background: "#ffffff" }}
    >
      <div className="slide1__footer row">
        <div className="slide1__footer-item col l-3 m-6">
          <div className="slide1__footer-item-cover">
            <img
              src="/img/footer/freeship.png"
              alt=""
              className="slide1__footer-icon"
            />
            <div className="slide1__footer-description">
              <div>
                <h3>Miễn phí giao hàng</h3>
              </div>
              <span>Miễn phí giao hàng nội thành</span>
            </div>
          </div>
        </div>
        <div className="slide1__footer-item col l-3 m-6">
          <div className="slide1__footer-item-cover">
            <img
              src="/img/footer/secure.png"
              alt=""
              className="slide1__footer-icon"
            />
            <div className="slide1__footer-description">
              <div>
                <h3>Thanh toán bảo mật</h3>
              </div>
              <span>Bảo mật thông tin khách hàng</span>
            </div>
          </div>
        </div>
        <div className="slide1__footer-item col l-3 m-6">
          <div className="slide1__footer-item-cover">
            <img
              src="/img/footer/support.png"
              alt=""
              className="slide1__footer-icon"
            />
            <div className="slide1__footer-description">
              <div>
                <h3>Hỗ trợ 27/7</h3>
              </div>
              <span>Chăm sóc tận tình</span>
            </div>
          </div>
        </div>
        <div className="slide1__footer-item col l-3 m-6">
          <div className="slide1__footer-item-cover">
            <img
              src="/img/footer/paymen.png"
              alt=""
              className="slide1__footer-icon"
            />
            <div className="slide1__footer-description">
              <div>
                <h3>Thanh toán khi nhận hàng</h3>
                <span>Chính sách trả hàng hoàn tiền</span>
              </div>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">© 2023 Market Online (@By DEV VMU )</div>
    </footer>
  );
};

export default Footer;
