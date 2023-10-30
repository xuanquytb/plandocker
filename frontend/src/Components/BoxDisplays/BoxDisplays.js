import React from "react";
import "./styles.css";

import ItemDisplay from "../ItemDisplay/ItemDisplay";

const BoxDisplays = ({
  index,
  titleDisplay,
  arrMenuNav,
  listData,
  bannerDir,
  bannerLocation,
}) => {
  return (
    <div className="box_displays" name={`box_displays${index}`}>
      <div className="box_displays__header row">
        <div className="box_displays__header-title col m-12">
          <h2>{titleDisplay}</h2>
        </div>
      </div>
      <div className="box_displays__container">
        <div className="box_displays__product row">
          <div
            className="box_displays__product-lar col l-4 m-8 c-0 "
            style={{ order: bannerLocation }}
          >
            <div className="box_displays__product-lar-link">
              <img
                src={`${bannerDir}`}
                alt={`${bannerDir}`}
                className="box_displays__product-lar-img"
              />
              <div className="coating"></div>
            </div>
          </div>

          <div className="box_displays__product-medium col l-8 m-4 c-12">
            <div className="box_displays__product-medium-list row">
              <div
                className="box_displays__product-medium-up-link"
                href="#first-product"
              >
                <i className="box_displays__product-medium-up-icon fa-solid fa-up-long"></i>
              </div>
              <div
                className="box_displays__product-medium-down-link"
                href="#last-product"
              >
                <i className="box_displays__product-medium-down-icon fa-solid fa-down-long"></i>
              </div>
              <div name="first-product"></div>
              {listData?.map((item) => {
                return <ItemDisplay key={item.id} item={item} />;
              })}

              <div name="last-product"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxDisplays;
