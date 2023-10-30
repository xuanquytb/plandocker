import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataAPI, postDataAPI, putData } from "../../common/api";
import { Image, Button, Descriptions } from "antd";
import { setProduct, setProducts } from "../../store/Products/ProductSlice";
import "./styles.css";
import { useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import { toast } from "react-toastify";
import { getCard } from "../../store/Card/CardSlice";
import { IconHeart, IconHeartActive } from "../../access/svg/Icons";
import { getFavourite } from "../../store/Favourite/FavouriteSlice";
import { converseMoney } from "../../common/strings";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [quantityNum, setQuantityNum] = useState(1);
  const [isLike, setIsLike] = useState(false);
  const [idLike, setIdLike] = useState();

  const { product } = useSelector((state) => state.products);

  let params = useParams();
  useEffect(() => {
    window.scroll(0, 0);
    async function getData() {
      let idP = params?.id;
      const rs = await getDataAPI(
        `${process.env.REACT_APP_BACKEND}api/product/find/${idP}`,
        {}
      );
      dispatch(setProduct(rs?.data?.product));
    }
    async function checkFavourite() {
      let idP = params?.id;
      const rs = await postDataAPI(
        `${process.env.REACT_APP_BACKEND}api/favourite/check-favourite`,
        {
          idP,
        }
      );
      setIsLike(rs?.data.isFavourite);
      setIdLike(rs?.data.idFavo);
    }
    getData();
    checkFavourite();
  }, [dispatch, params]);

  const handUnLike = async () => {
    const rs = await postDataAPI(
      `${process.env.REACT_APP_BACKEND}api/favourite/un-favourite`,
      {
        idP: idLike,
      }
    );

    if (product?.liked >= 0) {
      const result = await putData(
        `${process.env.REACT_APP_BACKEND}api/product/like/${product.id}`,
        {
          count: product.liked - 1,
        }
      );
      if (result?.data?.success) {
        dispatch(setProducts(result?.data?.products));
      }
    }
    if (rs.data.success) {
      toast.success("Loại bỏ danh sách yêu thích thành công");
      dispatch(getFavourite());
      setIsLike(false);
    }
  };
  const handLike = async () => {
    let rs = await postDataAPI(
      `${process.env.REACT_APP_BACKEND}api/favourite/addFavourite`,
      {
        idProduct: params?.id,
      }
    );
    if (product?.liked >= 0) {
      const result = await putData(
        `${process.env.REACT_APP_BACKEND}api/product/like/${product.id}`,
        {
          count: product.liked + 1,
        }
      );
      if (result?.data?.success) {
        dispatch(setProducts(result?.data?.products));
      }
    }

    if (rs.data.success) {
      toast.success("Thêm vào danh sách yêu thích thành công");
      dispatch(getFavourite());
      let idP = params?.id;
      const rs = await postDataAPI(
        `${process.env.REACT_APP_BACKEND}api/favourite/check-favourite`,
        {
          idP,
        }
      );
      setIdLike(rs?.data.idFavo);
      setIsLike(true);
    }
  };

  const addCard = async () => {
    let rs = await postDataAPI(
      `${process.env.REACT_APP_BACKEND}api/card/addCardItem`,
      {
        idProduct: product?.id,
        dongia: product?.price,
        quantity: quantityNum,
      }
    );
    if (rs?.data?.success) {
      toast.success("Thêm vào giỏ hàng thành công");
    }
    dispatch(getCard());
  };

  function onChange(value) {
    let quanty = +value.target.value;
    if (quanty > product.quantity) quanty = product.quantity;
    else if (quanty < 1) quanty = 1;
    setQuantityNum(quanty);
  }

  return (
    <div>
      <div className="detailProduct">
        <div
          className="itemLeft"
          style={{ height: "475px", position: "relative" }}
        >
          <div
            style={{
              position: "absolute",
              top: 15,
              right: 15,
              zIndex: 9999,
              cursor: "pointer",
            }}
            onClick={isLike ? handUnLike : handLike}
          >
            {isLike ? (
              <IconHeartActive width={35} height={35} />
            ) : (
              <IconHeart width={35} height={35} />
            )}
          </div>
          <Image
            width={"100%"}
            height={350}
            src={
              product !== undefined
                ? `${process.env.REACT_APP_BACKEND}api/procucts/${product.image}`
                : ""
            }
            style={{
              width: "100%",
              height: "350px",
            }}
            preview={{
              visible: false,
            }}
            onClick={() => setVisible(true)}
          />

          <div
            style={{
              marginTop: 20,
              display: "block",
            }}
          >
            <Image.PreviewGroup
              preview={{
                visible,
                onVisibleChange: (vis) => setVisible(vis),
              }}
            >
              {product?.gallery?.split(",")?.map((item) => {
                return (
                  <span key={item}>
                    <Image
                      width={85}
                      src={`${process.env.REACT_APP_BACKEND}api/procucts/${item}`}
                    />
                  </span>
                );
              })}
            </Image.PreviewGroup>
          </div>
        </div>

        <div className="itemRight">
          <div>
            <h2 className="nameProduct">
              {product !== undefined ? product.nameProduct : ""}
            </h2>
            <div className="reviewProduct">
              <div className="review-Damua">
                Đã bán:
                {product !== undefined ? product.sold : ""}
              </div>
            </div>

            <div className="price-product">
              <div className="origin-price" style={{ fontSize: 15 }}>
                {" "}
                {product !== undefined ? converseMoney(product?.price) : ""}
              </div>
              <div className="price-buy" style={{ fontSize: 25 }}>
                {product !== undefined
                  ? `${converseMoney(
                      product?.price -
                        (product?.price * product?.promotional) / 100
                    )}`
                  : ""}
              </div>
              <div className="discount">
                {product !== undefined ? product.promotional : ""}% GIẢM
              </div>
            </div>

            <div className="qualiti-product">
              <span>Số lượng</span>
              <input
                type={"number"}
                value={quantityNum}
                onChange={onChange}
                style={{
                  width: 44,
                  textAlign: "center",
                  height: 23,
                  borderRadius: 10,
                  border: "0.5px solid gray",
                }}
              />
              <span className="avaliable-product">
                {product !== undefined ? `${product.quantity}` : ""} sản phẩm có
                sẵn
              </span>
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "15px",
              }}
            >
              <Button
                size="large"
                shape="round"
                type="danger"
                style={{ backgroundColor: "aquamarine", fontWeight: 700 }}
                onClick={addCard}
              >
                Thêm vào giỏ hàng
              </Button>
            </div>
            <div className="policy">
              <div className="return-policy">7 ngày miễn phí trả hàng</div>
              <div className="price-ship">Đảm bảo hàng chính hãng</div>
              <div className="price-real">Giao hàng nhanh chóng</div>
            </div>
          </div>
        </div>
      </div>
      <strip></strip>
      <div className="detail-more-Product">
        <div className="more-detail">
          <h2 className="title-detail">Chi tiết sản phẩm</h2>
          <Descriptions>
            <Descriptions.Item label="Thương hiệu ">
              {product !== undefined ? `${product.nameManufacturer}` : ""}
            </Descriptions.Item>
          </Descriptions>
          <Descriptions>
            <Descriptions.Item label="Xuất xứ ">
              {product !== undefined ? `${product.nameOrigin}` : ""}
            </Descriptions.Item>
          </Descriptions>
          <Descriptions>
            <Descriptions.Item label="Số lượng còn lại ">
              {product !== undefined ? `${product.quantity}` : ""}
            </Descriptions.Item>
          </Descriptions>
          <Descriptions>
            <Descriptions.Item label="Gửi từ ">Hà nội</Descriptions.Item>
          </Descriptions>
        </div>
        <div>
          <h2 className="title-detail">Mô tả sản phẩm</h2>
          <div className="detail-des" style={{ fontSize: 16 }}>
            {product !== undefined
              ? HTMLReactParser(`${product.description}`)
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
