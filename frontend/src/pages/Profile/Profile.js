import React, { useState } from "react";
import { Upload, Image } from "antd";
import "./responsive.css";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { verify } from "../../store/Auth/AuthSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const onChange = ({ fileList: newFileList }) => {
    dispatch(verify());
    setFileList(newFileList);
  };
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const [fileList, setFileList] = useState([]);
  return (
    <div>
      <span className="main_bg"></span>

      <div className="container-profile">
        <header
          style={{ height: 0 }}
          onClick={() => {
            navigate("/");
          }}
        >
          <div className="brandLogo">
            <figure>
              <img
                src="/images/logo.png"
                alt="logo"
                width="80px"
                height="80px"
              />
            </figure>
            <span>AYI</span>
          </div>
        </header>

        <section className="userProfile card">
          <div className="profile">
            <figure className="avatar">
              {user?.nameAvata !== null &&
              user?.nameAvata !== undefined &&
              user?.nameAvata !== "" ? (
                <div style={{ display: "flex", position: "relative" }}>
                  {fileList?.length === 0 && (
                    <div
                      style={{ position: "absolute", left: "-50px", top: -100 }}
                    >
                      <Image
                        width={100}
                        height={100}
                        src={`${process.env.REACT_APP_BACKEND}api/user/${user?.nameAvata}`}
                      />
                    </div>
                  )}
                  <div
                    style={{ position: "absolute", left: "-50px", top: -100 }}
                  >
                    <Upload
                      action={`${process.env.REACT_APP_BACKEND}api/images/upload/user/${user.id}`}
                      listType="picture-card"
                      maxCount={1}
                      fileList={fileList}
                      onChange={onChange}
                      name="avatar"
                    >
                      {fileList.length < 1 && (
                        <span style={{ color: "#fff", fontSize: 10 }}>
                          upload
                        </span>
                      )}
                    </Upload>
                  </div>
                </div>
              ) : (
                <Upload
                  action={`${process.env.REACT_APP_BACKEND}api/images/upload/user/${user.id}`}
                  listType="picture-card"
                  fileList={fileList}
                  onChange={onChange}
                  name="avatar"
                  width={500}
                  height={500}
                >
                  {fileList.length < 1 && "+ Upload"}
                </Upload>
              )}
            </figure>
          </div>
          <div className="order">
            <section className="timeline_about card" style={{ height: "100%" }}>
              <div className="tabs">
                <ul>
                  <li className="about active">
                    <i className="ri-user-3-fill ri"></i>
                    <span>Đơn hàng</span>
                  </li>
                </ul>
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", rowGap: 20 }}
              >
                <div>Đơn hàng đã giao</div>
                <div>Đơn hàng đã hủy</div>
                <div>Tổng số tiền đã tiêu dùng</div>
              </div>
            </section>
          </div>
        </section>

        <section className="userDetails card">
          <div className="userName">
            <h1 className="name">{user?.fullname}</h1>
            <div className="map">
              <i className="ri-map-pin-fill ri"></i>
              <span>{user?.phone}</span>
            </div>
            <p style={{ marginTop: 10 }}>Khách hàng tiềm năng</p>
          </div>

          <div className="rank">
            <h1 className="heading">Số đơn hàng</h1>
            <span>52</span>
            <div className="rating">
              <i className="ri-star-fill rate"></i>
              <i className="ri-star-fill rate"></i>
              <i className="ri-star-fill rate"></i>
              <i className="ri-star-fill rate"></i>
              <i className="ri-star-fill rate underrate"></i>
            </div>
          </div>
        </section>

        <section className="timeline_about card">
          <div className="tabs">
            <ul>
              <li className="about active">
                <i className="ri-user-3-fill ri"></i>
                <span>Thông tin tài khoản</span>
              </li>
            </ul>
          </div>

          <div className="contact_Info">
            <h1 className="heading">Thông tin liên hệ </h1>
            <ul
              style={{
                margin: "10px 0",
                display: "flex",
                gap: 100,
                flexWrap: "wrap",
              }}
            >
              <li className="phone">
                <h1 className="label">Phone:</h1>
                <span className="info">{user?.phone}</span>
              </li>

              <li className="address">
                <h1 className="label">Địa chỉ:</h1>
                <span className="info">{user?.address}</span>
              </li>

              <li className="email">
                <h1 className="label">E-mail:</h1>
                <span className="info">{user?.email}</span>
              </li>
              <li className="birthday">
                <h1 className="label">Birthday:</h1>
                <span className="info">
                  {user?.dateOfBirth || "Chưa cập nhật"}
                </span>
              </li>

              <li className="sex">
                <h1 className="label">Gender:</h1>
                <span className="info">{user?.sex || "Chưa cập nhật"}</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
