import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Descriptions, Badge, Modal, Button, Popconfirm } from "antd";

import "./style/myorder.css";
import { postDataAPI, putData } from "../../common/api";
import { country } from "../../common/constantText";
import { converseMoney } from "../../common/strings";
import { useDispatch } from "react-redux";
import { getOrders } from "../../store/Order/OrderSlice";

const ModalShow = ({ input, visible, onClose }) => {
  const [listItem, setListItem] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      const result = await postDataAPI(
        `${process.env.REACT_APP_BACKEND}api/Order/allItemOrder`,
        {
          idCard: input.idCard,
          idPayOrder: input.id,
        }
      );
      setListItem(result.data.orderPayment);
    }
    if (input?.idCard && input.id) {
      getData();
    }
  }, [input]);

  const cancelOrder = async () => {
    const inputData = {
      id: input.id,
      state: "Đã hủy",
    };

    const result = await putData(
      `${process.env.REACT_APP_BACKEND}api/Order/updateStateCus/${input.id}`,
      {
        state: inputData?.state,
      }
    );

    if (result) {
      toast.success("Hủy đơn hàng thành công");
      dispatch(getOrders());
    } else {
      toast.info("Hủy đơn hàng thất bại");
    }
  };
  const orderSuccess = async () => {
    const inputData = {
      id: input.id,
      state: "Đơn hàng đã hoàn thành",
    };

    const result = await putData(
      `${process.env.REACT_APP_BACKEND}api/Order/updateStateCus/${input.id}`,
      {
        state: inputData?.state,
      }
    );

    if (result) {
      toast.success("Đã cập nhật trạng thái đơn hàng");
      dispatch(getOrders());
    }
  };
  return (
    <Modal
      title="Chi tiết đơn hàng"
      centered
      open={visible}
      onCancel={onClose}
      width={1000}
      footer={[]}
    >
      <Descriptions
        layout="vertical"
        bordered
        extra={
          <Popconfirm
            title={
              input?.state === "Đã giao hàng"
                ? "Đã nhận được hàng ?"
                : "Hủy đơn hàng ?"
            }
            onConfirm={(e) => {
              input?.state === "Đã giao hàng" ? orderSuccess() : cancelOrder();
            }}
          >
            {input?.state === "Đã giao hàng" ? (
              <Button
                disabled={
                  input?.state === "Đơn hàng đã hoàn thành" ? true : false
                }
                type="primary"
              >
                Đã nhận được hàng
              </Button>
            ) : input?.state === "Đơn hàng đã hoàn thành" ||
              input?.state === "Đã hủy" ? (
              <></>
            ) : (
              <Button type="primary">Hủy đơn hàng</Button>
            )}
          </Popconfirm>
        }
      >
        <Descriptions.Item label="Trạng thái" span={5}>
          <Badge status="processing" text={input.state} />
        </Descriptions.Item>
        <Descriptions.Item label="Tên khách hàng">
          {input.fullname}
        </Descriptions.Item>

        <Descriptions.Item label="Số điện thoại">
          {input.phone}
        </Descriptions.Item>
        <Descriptions.Item label="Email">{input.email}</Descriptions.Item>
      </Descriptions>
      <Descriptions title="" layout="vertical" bordered>
        <Descriptions.Item label="Địa chỉ" span={3}>
          {input.address}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="" layout="vertical" bordered>
        <div class="tbl-content">
          {listItem !== undefined ? (
            listItem.map((item) => {
              return (
                <div className="cartdetailItem" key={item.id}>
                  <img
                    className="img-product-detail"
                    src={`${process.env.REACT_APP_BACKEND}api/procucts/${item.image}`}
                    alt=""
                  />
                  <div className="infoProduct">
                    <p className="text-info name-Product">{item.nameProduct}</p>
                    <p className="text-info price-Product-detail-order">
                      Thành tiền:{" "}
                      {converseMoney(
                        item.quantity * item.price,
                        country.statusExChange
                      )}
                    </p>
                    <p className="text-info warehouseCount-Product">
                      {converseMoney(item.price, country.statusExChange)}{" "}
                      <span
                        style={{
                          color: "gray",
                          fontSize: 15,
                        }}
                      >
                        *
                      </span>{" "}
                      <span
                        style={{
                          color: "gray",
                          fontSize: 15,
                        }}
                      >
                        {item.quantity}
                      </span>
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <p></p>
          )}
        </div>
      </Descriptions>
    </Modal>
  );
};

export default ModalShow;
