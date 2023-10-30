import React from "react";

const FooterInfo = () => {
  return (
    <>
      <div className="slide1__footer row">
        <div className="slide1__footer-item col l-4 m-6 c-10">
          <div className="slide1__footer-item-cover">
            <img
              src="/images/container/slide1/footer/shipping.png"
              alt=""
              className="slide1__footer-icon"
            />
            <div className="slide1__footer-description">
              <a href="google.com">
                <h3>Giao hàng nhanh chóng</h3>
              </a>
              <span>Giao hàng nhanh chóng mọi lúc mọi nơi</span>
            </div>
          </div>
        </div>
        <div className="slide1__footer-item col l-4 m-6 c-10">
          <div className="slide1__footer-item-cover">
            <img
              src="/images/container/slide1/footer/money.png"
              alt=""
              className="slide1__footer-icon"
            />
            <div className="slide1__footer-description">
              <a href="google.com">
                <h3>Phương thức thanh toán</h3>
              </a>
              <span>Đa dạng các thương thức thanh toán</span>
            </div>
          </div>
        </div>
        <div className="slide1__footer-item col l-4 m-6 c-10">
          <div className="slide1__footer-item-cover">
            <img
              src="/images/container/slide1/footer/support.png"
              alt=""
              className="slide1__footer-icon"
            />
            <div className="slide1__footer-description">
              <a href="google.com">
                <h3>Chăm sóc khách hàng</h3>
              </a>
              <span>Luôn có nhân viên trực giải đáp mọi thắc mắc</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterInfo;
