import React, { useEffect } from "react";
import { Drawer, Descriptions, Badge, Image } from "antd";

import HTMLReactParser from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
import { getDataAPI } from "../../../common/api";
import { setProduct } from "../../../store/Products/ProductSlice";

import { isEmptyObject } from "../../../common/strings";

const ShowDrawer = ({ input, visible, onClose }) => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.products);
  useEffect(() => {
    async function getData() {
      let idP = input?.key;
      const rs = await getDataAPI(
        `${process.env.REACT_APP_BACKEND}api/product/find/${idP}`,
        {}
      );
      dispatch(setProduct(rs?.data?.product));
    }
    if (!isEmptyObject(input)) {
      getData();
    }
  }, [dispatch, input]);

  return (
    <Drawer
      destroyOnClose
      title={input.fullname}
      open={visible}
      width={600}
      onClose={onClose}
    >
      <Image
        width={100}
        style={{
          borderRadius: "50%",
        }}
        src={`${process.env.REACT_APP_BACKEND}api/procucts/${input.image}`}
      />
      <Descriptions title="Thông tin sản phẩm" layout="vertical" bordered>
        <Descriptions.Item label="Trạng thái" span={5}>
          {product?.gallery?.split(",")?.map((item, index) => {
            return (
              <span key={index}>
                <Image
                  width={100}
                  src={`${process.env.REACT_APP_BACKEND}api/procucts/${item}`}
                />
              </span>
            );
          })}
        </Descriptions.Item>
        <Descriptions.Item label="Trạng thái" span={5}>
          <Badge status="processing" text="Còn hàng" />
        </Descriptions.Item>
        <Descriptions.Item label="Tên sản phẩm">
          {input.nameProduct}
        </Descriptions.Item>

        <Descriptions.Item label="Bảo hành" span={2}>
          {input.warranty}
        </Descriptions.Item>

        <Descriptions.Item label="Số lượng">{input.quantity}</Descriptions.Item>

        <Descriptions.Item label="Giá gốc">{input.price}</Descriptions.Item>
        <Descriptions.Item label="Giảm giá">
          {input.promotional}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="" layout="vertical" bordered>
        <Descriptions.Item label="Chi tiết sản phẩm">
          {HTMLReactParser(`${input.description}`)}
        </Descriptions.Item>
      </Descriptions>
      <div style={{ padding: 10 }}></div>
    </Drawer>
  );
};

export default ShowDrawer;
