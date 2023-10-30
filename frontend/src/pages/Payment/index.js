import React, { useState, useEffect } from "react";
import { Form, Row, Input, Radio, Space, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getPayment } from "../../store/Payment/PaymentSlice";
import { getCard, getSumMoneyCard } from "../../store/Card/CardSlice";
import "./payment.css";
import { postDataAPI } from "../../common/api";
import { country } from "../../common/constantText";
import { converseMoney } from "../../common/strings";

const Payment = () => {
  const [link, setLink] = useState("");
  const { payments } = useSelector((state) => state.payments);
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const { cards, sumMoneyCard } = useSelector((state) => state.card);
  const [payment, setPayment] = useState(1);
  const [description, setDescription] = useState("");

  const onChange = (e) => {
    const payment = payments.filter(function (item, index) {
      return item.id === e.target.value.id;
    });
    setDescription(payment[0].description);
    setPayment(e.target.value);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCard());
    dispatch(getSumMoneyCard());

    dispatch(getPayment());
  }, [dispatch]);

  const createOrder = async (OrderNew) => {
    const orderDetail = {
      idCard: OrderNew.idCard,
      idCustomer: OrderNew.idCustomer,
      sumPayment: OrderNew.sumPayment,
      address: OrderNew.address,
      idPayment: OrderNew.idPayment,
    };

    const response = await postDataAPI(
      `${process.env.REACT_APP_BACKEND}api/Order/${
        payment?.id === 4 ? "addOrderPayOnlineDetail" : "addOrderDetail"
      }`,
      orderDetail
    );
    if (response.data.success) {
      if (payment?.id === 4) {
        toast.info("Nhấn vào chuyển trang để tiếp tục thanh toán");
      } else {
        toast.success("Đặt hàng thành công");
      }
      return payment?.id === 4 ? response.data?.directUrl : response.data;
    } else {
      return response.data;
    }
  };

  const onFinish = async (address) => {
    const infoPayment = {
      idCard: user.idCard,
      idCustomer: user.id,
      address: address,
      sumPayment: sumMoneyCard + 35000,
      idPayment: payment?.id,
    };
    if (payment?.id === 4) {
      const link = await createOrder(infoPayment);
      setLink(link);
    } else {
      await createOrder(infoPayment);
      navigate("/");
    }

    dispatch(getCard());
    dispatch(getSumMoneyCard());
  };

  return (
    <>
      <div className="main-Payment">
        <div className="box-left">
          <div className="flex-left">
            <h2 className="title" style={{ marginBottom: 20 }}>
              Thông tin thanh toán
            </h2>
            <Form
              className="form-info-address"
              layout="vertical"
              requiredMark
              onFinish={onFinish}
              initialValues={{
                fullname: user.fullname,
                phone: user.phone,
                email: user.email,
                address: user.address,
              }}
            >
              <Row gutter={16}>
                <Form.Item
                  label="Họ và tên"
                  name="fullname"
                  rules={[
                    {
                      required: true,
                      message: "Trường này không được để trống",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    className="box-input-addres"
                    placeholder="Họ và tên"
                    // placeholder={user[0].fullname}
                  />
                </Form.Item>
              </Row>
              <Row gutter={16}>
                <Form.Item
                  label="Số điện thoại"
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Trường này không được để trống",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    className="box-input-addres"
                    placeholder="Số điện thoại"
                  />
                </Form.Item>
              </Row>
              <Row gutter={16}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Trường này không được để trống",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    className="box-input-addres"
                    placeholder="Email"
                  />
                </Form.Item>
              </Row>
              <Row gutter={16}>
                <Form.Item
                  label="Địa chỉ nhận hàng"
                  name="address"
                  rules={[
                    {
                      required: true,
                      message: "Trường này không được để trống",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    className="box-input-addres"
                    placeholder="Địa chỉ"
                  />
                </Form.Item>
              </Row>
            </Form>
          </div>
          <div className="flex-right">
            <h2 className="title" style={{ marginBottom: 20 }}>
              Vận chuyển
            </h2>
            <div className="delivery" style={{}}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="img-tic-xanh"
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 15,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ color: "green" }}
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <strong style={{ marginLeft: 20, marginRight: 72 }}>
                  Giao hàng tận nơi
                </strong>
                <div className="price-delivery" style={{ color: "red" }}>
                  {converseMoney(35000, country.statusExChange)}
                </div>
              </div>
            </div>
            <h2 className="title" style={{ margin: "20px 0" }}>
              Phương thức thanh toán
            </h2>
            <div className="choice-payment">
              <Radio.Group onChange={onChange} value={payment}>
                <Space direction="vertical" key={"1"}>
                  {payments?.map((item, index) => {
                    return (
                      <Radio
                        className="box-radio-option"
                        value={item}
                        key={index}
                      >
                        {item.tenphuongthuc}
                      </Radio>
                    );
                  })}
                </Space>
              </Radio.Group>
            </div>

            <div className="description-payment">{description}</div>
          </div>
        </div>
        <div className="box-right">
          <div className="TitlePayment">
            <h3>Đơn hàng</h3>
          </div>
          {cards?.map((item, index) => {
            return (
              <>
                <div className="itemBuy" key={index} style={{ margin: 10 }}>
                  <div className="itemBuy-detail">
                    <div className="imgProduct">
                      <img
                        src={`${process.env.REACT_APP_BACKEND}api/procucts/${item.image}`}
                        alt=""
                        style={{
                          width: 60,
                          height: 60,
                          borderRadius: 10,
                        }}
                      />
                    </div>
                    <div className="infomation">
                      <div className="infomation-left">
                        <h3 className="hind-text-dot-2">{item.nameProduct}</h3>
                        <div
                          style={{
                            color: "gray",
                            marginTop: 8,
                          }}
                        >
                          {item.quantity} Sản phẩm
                        </div>
                      </div>
                      <div
                        className="infomation-right"
                        style={{ position: "relative" }}
                      >
                        <span>
                          {" "}
                          {converseMoney(
                            item.quantity * item.price,
                            country.statusExChange
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}

          <div className="detail-Order">
            <div className="sumMoney">
              <h2
                className="title-money"
                style={{ margin: 0, position: "relative" }}
              >
                <strong>Tạm tính : </strong>
                <span
                  style={{
                    color: "red",
                    marginLeft: 90,
                    position: "absolute",
                    right: 0,
                  }}
                >
                  {sumMoneyCard !== null
                    ? converseMoney(sumMoneyCard, country.statusExChange)
                    : "0"}{" "}
                </span>
              </h2>
              <h2 style={{ margin: 0, position: "relative" }}>
                <strong>Phí vận chuyển : </strong>
                <span
                  style={{
                    color: "red",
                    marginLeft: 90,
                    position: "absolute",
                    right: 0,
                  }}
                >
                  {converseMoney(35000, country.statusExChange)}
                </span>
              </h2>

              <h2 style={{ margin: 0, position: "relative" }}>
                <strong>Tổng thanh toán : </strong>
                <span
                  style={{
                    color: "red",
                    marginLeft: 90,
                    position: "absolute",
                    right: 0,
                  }}
                >
                  {converseMoney(35000 + sumMoneyCard, country.statusExChange)}{" "}
                </span>
              </h2>
            </div>
            <div
              className="btn-action-block"
              style={{ display: "flex", flexDirection: "column" }}
            >
              {payment?.id === 4 && link !== "" ? (
                <Button
                  className="btn-buy"
                  style={{ marginBottom: 20 }}
                  type="primary"
                  onClick={() => {
                    window.open(link, "", "width=1200,height=900");
                  }}
                >
                  Chuyển hướng
                </Button>
              ) : (
                <Button
                  style={{ marginBottom: 20 }}
                  type="primary"
                  className="btn-buy"
                  onClick={(e) => onFinish(user.address)}
                >
                  Đặt hàng
                </Button>
              )}
            </div>
            <div className="btn-action-block"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
