import React, { useState, useEffect } from "react";
import { Drawer, Descriptions, Badge } from "antd";

import HTMLReactParser from "html-react-parser";

import classNames from "classnames/bind";
import styles from "./css/styleshow.module.css";
import { getDataAPI, postDataAPI } from "../../../common/api";
import { isEmptyObject } from "../../../common/strings";

const cx = classNames.bind(styles);

const ShowDrawer = ({ input, visible, onClose }) => {
  const [listItem, setListItem] = useState();

  useEffect(() => {
    async function fillData() {
      const resultIdCard = await getDataAPI(
        `${process.env.REACT_APP_BACKEND}api/Order/findIdCard/${input.id}`
      );

      const result = await postDataAPI(
        `${process.env.REACT_APP_BACKEND}api/card/allItemCardOrder`,
        {
          idCard: resultIdCard.data.value.idCard,
          idPayOrder: input.id,
        }
      );
      setListItem(result.data.orderPayment);
    }
    if (!isEmptyObject(input)) {
      fillData();
    }
  }, [input]);

  return (
    <Drawer
      destroyOnClose
      title={input.fullname}
      open={visible}
      width={800}
      onClose={onClose}
    >
      <Descriptions
        title="Thông tin sản phẩm"
        layout="vertical"
        bordered
        className="pdf-page"
      >
        <Descriptions.Item label="Trạng thái" span={5}>
          <Badge status="processing" text={input.state} />
        </Descriptions.Item>
        <Descriptions.Item label="Tên khách hàng">
          {input.fullname}
        </Descriptions.Item>

        <Descriptions.Item label="Số điện thoại" span={2}>
          {input.phone}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="" layout="vertical" bordered>
        <Descriptions.Item label="Tổng thanh toán">
          {input.sumPayment !== undefined
            ? input.sumPayment.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })
            : ""}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="" layout="vertical" bordered>
        <Descriptions.Item label="Email">
          {HTMLReactParser(`${input.email}`)}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="" layout="vertical" bordered>
        <Descriptions.Item label="Địa chỉ">
          {HTMLReactParser(`${input.address}`)}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="" layout="vertical" bordered>
        <div className="tbl-content">
          {listItem !== undefined ? (
            listItem.map((item) => {
              return (
                <div className={cx("cartdetailItem")} key={item.id}>
                  <img
                    className={cx("img-product-detail")}
                    src={`${process.env.REACT_APP_BACKEND}api/procucts/${item.image}`}
                    alt=""
                  />
                  <div className={cx("infoProduct")}>
                    <div>
                      <p className={cx("text-info", "name-Product")}>
                        {item.nameProduct}
                      </p>
                      <p className={cx("text-info", "warehouseCount-Product")}>
                        {item.price.toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}
                        <span
                          style={{
                            color: "gray",
                            fontSize: 15,
                          }}
                        >
                          {" "}
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
                    <div>
                      <p
                        className={cx(
                          "text-info",
                          "price-Product-detail-order"
                        )}
                      >
                        Thành tiền:{" "}
                        {(item.quantity * item.price).toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p></p>
          )}
        </div>
      </Descriptions>
      {/* <div style={{ padding: 10 }}>
                <Button onClick={handleExport}>Xuất hóa đơn</Button>
                <Button
                    style={{ marginLeft: 10 }}
                    onClick={() => handleExportInsuance()}
                >
                    Xuất phiếu bảo hành
                </Button>
                <Button
                    style={{ marginLeft: 10 }}
                    onClick={() => handleExportOutWarehouse()}
                >
                    Tạo phiếu xuất kho
                </Button>
            </div> */}
    </Drawer>
  );
};

export default ShowDrawer;
