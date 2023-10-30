import React from "react";

import FooterInfo from "../../Components/FooterInfo/FooterInfo";

import BoxDisplays from "../../Components/BoxDisplays/BoxDisplays";
import { useSelector } from "react-redux";

const Home = () => {
  const { products } = useSelector((state) => state.products);
  const { banner } = useSelector((state) => state.banners);

  const arrBoxDisplays = [
    {
      key: 1,
      titleDisplay: "Màn hình Gaming",

      listData: products?.filter((item) => item.idCategory === 1),
      bannerDir: `${process.env.REACT_APP_BACKEND}api/banner/manhinh.jpg`,
      bannerLocation: 0,
    },
    {
      key: 2,
      titleDisplay: "LAPTOP, MACBOOK, SURFACE",

      listData: products?.filter((item) => item.idCategory === 2),
      bannerDir: `${process.env.REACT_APP_BACKEND}api/banner/laptop.jpeg`,
      bannerLocation: 1,
    },
    {
      key: 3,
      titleDisplay: "LINH KIỆN MÁY TÍNH",

      listData: products?.filter((item) => item.idCategory === 3),
      bannerDir: `${process.env.REACT_APP_BACKEND}api/banner/main.jpg`,
      bannerLocation: 0,
    },
    {
      key: 4,
      titleDisplay: "TẢN NHIỆT, FAN, ĐÈN LED",

      listData: products?.filter((item) => item.idCategory === 4),
      bannerDir: `${process.env.REACT_APP_BACKEND}api/banner/fanled.jpg`,
      bannerLocation: 1,
    },
    {
      key: 5,
      titleDisplay: "LOA, TAI NGHE, MIC, WEBCAM",
      listData: products?.filter((item) => item.idCategory === 6),
      bannerDir: `${process.env.REACT_APP_BACKEND}api/banner/cam.jpg`,
      bannerLocation: 0,
    },
  ];

  return (
    <div style={{ background: "#ffffff", margin: "20px 0" }}>
      <FooterInfo />
      {arrBoxDisplays?.map((item) => {
        return (
          <BoxDisplays
            key={item.key}
            index={item.key}
            titleDisplay={item?.titleDisplay}
            listData={item?.listData}
            bannerDir={item?.bannerDir}
            bannerLocation={item?.bannerLocation}
          />
        );
      })}
      {/* <Hotdeal /> */}
    </div>
  );
};

export default Home;
