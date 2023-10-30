import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { InputNumber } from "antd";
import "./styles.css";
import {
  deleteCardDetail,
  getCard,
  getSumMoneyCard,
} from "../../store/Card/CardSlice";
import { putData } from "../../common/api";
import { country } from "../../common/constantText";
import { converseMoney } from "../../common/strings";
import ImageCard from "../../access/svg/cart_4.png";
const CardDetail = () => {
  const { cards, sumMoneyCard } = useSelector((state) => state.card);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSumMoneyCard());
    dispatch(getCard());
  }, [dispatch]);

  const handNum = async (e, item) => {
    const data = {
      id: item.id,
      dongia: e * item.dongia,
      quantity: e,
    };
    const result = await putData(
      `${process.env.REACT_APP_BACKEND}api/card/updateCardDetail`,
      data
    );
    if (result?.data?.success) {
      dispatch(getSumMoneyCard());
      dispatch(getCard());
    }
  };

  const handleDeleteItem = async (item) => {
    dispatch(deleteCardDetail(item.id));
  };
  return (
    <div className="main-checkout">
      <div className="body-checkout">
        <div className="body-checkout-Content">
          {cards?.length > 0 ? (
            <>
              <h1 className="Title-checkout">Sản phẩm trong giỏ hàng</h1>
              {cards?.map((item, index) => {
                return (
                  <div className="cartItem" key={index}>
                    <img
                      className="img-product"
                      src={`${process.env.REACT_APP_BACKEND}api/procucts/${item.image}`}
                      alt=""
                    />
                    <div className="infoProduct">
                      <p className="text-info name-Product-card">
                        {item.nameProduct}
                      </p>
                      <p className="text-info price-Product">
                        <strong style={{ fontSize: 15 }}>Giá bán</strong>:{" "}
                        {converseMoney(item.dongia, country.statusExChange)}
                      </p>
                      <p className="text-info warehouseCount-Product">
                        Đơn giá:{" "}
                        {converseMoney(
                          item.quantity * item.dongia,
                          country.statusExChange
                        )}
                      </p>
                    </div>
                    <div className="btn-action">
                      <div className="btn-action-block">
                        <InputNumber
                          min={1}
                          max={10}
                          defaultValue={item.quantity}
                          onChange={(event) => handNum(event, item)}
                          style={{
                            width: 50,
                            height: 36,
                            justifyContent: "center",
                            alignContent: "center",
                            borderRadius: 10,
                          }}
                        />
                      </div>
                      <div
                        className="btn-bin"
                        onClick={() => handleDeleteItem(item)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="35"
                          height="35"
                          style={{
                            marginLeft: 10,
                            paddingTop: 5,
                          }}
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z"
                            fill="#71E0CD"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <span>
              <img
                className="image-cart-empty"
                style={{}}
                src={ImageCard}
                alt=""
              />
            </span>
          )}
        </div>
      </div>
      <div className="btn-checkout">
        <div className="sumMoney">
          <h2>
            <strong>Tạm tính : </strong>
            <span style={{ color: "red" }}>
              {sumMoneyCard !== 0
                ? converseMoney(sumMoneyCard, country.statusExChange)
                : "0"}
            </span>
          </h2>
        </div>
        <div className="btn-action-block">
          <button
            className="btn-pay"
            disabled={cards?.length > 0 ? false : true}
            onClick={(e) => navigate("/payment")}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span> Thanh toán
          </button>
          {/* <button type="primary"></button> */}
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
