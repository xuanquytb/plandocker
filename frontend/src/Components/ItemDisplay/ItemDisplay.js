import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { converseMoney } from "../../common/strings";
import { IconCard, IconHeartCount, IconShowEye } from "../../access/svg";
import { postDataAPI } from "../../common/api";
import { useDispatch, useSelector } from "react-redux";
import { getCard } from "../../store/Card/CardSlice";
import { toast } from "react-toastify";
import { country } from "../../common/constantText";

const ItemDisplay = ({ item, sLeft = 3 }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const addCard = async (item) => {
    if (user !== undefined) {
      let rs = await postDataAPI(
        `${process.env.REACT_APP_BACKEND}api/card/addCardItem`,
        {
          idProduct: item?.id,
          dongia: item?.price,
          quantity: 1,
        }
      );
      if (rs?.data?.success) {
        toast.success("Thêm vào giỏ hàng thành công");
      }
      dispatch(getCard());
    } else {
      toast.info("Vui lòng đăng nhập trước khi mua hàng");
    }
  };

  return (
    <div
      key={item.id}
      id=""
      className={`box_displays__product-medium-item col l-${sLeft} c-6 m-12`}
    >
      <div className="box_displays__product-medium-item-link">
        <div
          className="cover"
          onClick={() => {
            navigate(`/product/${item.id}`, { state: { id: item.id } });
          }}
        >
          <img
            src={`${process.env.REACT_APP_BACKEND}api/procucts/${item.image}`}
            alt=""
            className="box_displays__product-medium-img"
          />
          <div className="coating"></div>
        </div>
        <div className="box_displays__product-description">
          <h3 className="hind-text-dot">{item?.nameProduct}</h3>
          <span className="box_displays__product-price">
            {converseMoney(item?.price, country.statusExChange)}
          </span>
          <span className="box_displays__product-price box_displays__product-price--current">
            {converseMoney(item?.price, country.statusExChange)}{" "}
          </span>
        </div>
        <div className="box_displays__product-action">
          <div
            className="box_displays__product-action-btn"
            onClick={() => {
              addCard(item);
            }}
          >
            <IconCard />
          </div>

          <div className="box_displays__product-action-btn">
            <IconHeartCount />
            <span>{item?.liked}</span>
          </div>
          <div className="box_displays__product-action-btn">
            <IconShowEye />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDisplay;
