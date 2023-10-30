import React, { useState, useEffect } from "react";
import { Tabs, Button, Popconfirm } from "antd";
import "./style/myorder.css";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../store/Order/OrderSlice";
import ModalShow from "./ModalShow";

const { TabPane } = Tabs;

const MyOrder = () => {
    const [visibleShow, setVisibleShow] = useState(false);
    const [orderDetail, setOrderDetail] = useState({});
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const { orders } = useSelector((state) => state.orders);

    const handleShow = async (record) => {
        const input = {
            idCard: user.idCard,
            address: user.address,
            email: user.email,
            fullname: user.fullname,
            id: record.id,
            phone: user.phone,
            state: record.state,
            sumPayment: record.sumPayment,
        };
        setOrderDetail(input);
        setVisibleShow(true);
    };

    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch]);

    const handConfirm = async (record) => {
        // const input = {
        //     id: record.id,
        //     state: "Đơn hàng hoàn thành",
        // };
        // await updateOrderState(input);
        dispatch(getOrders());
    };
    const wait =
        orders !== undefined
            ? orders.filter(function (order, index) {
                  return order.state === "Chờ thanh toán";
              })
            : "";
    const waitConfirmation =
        orders !== undefined
            ? orders.filter(function (order, index) {
                  return order.state === "Chờ xác nhận";
              })
            : "";
    const delivery =
        orders !== undefined
            ? orders.filter(function (order, index) {
                  return order.state === "Đang giao hàng";
              })
            : "";
    const success =
        orders !== undefined
            ? orders.filter(function (order, index) {
                  return order.state === "Đã giao hàng";
              })
            : "";
    const complete =
        orders !== undefined
            ? orders.filter(function (order, index) {
                  return order.state === "Đơn hàng đã hoàn thành";
              })
            : "";
    const cancelOr =
        orders !== undefined
            ? orders.filter(function (order, index) {
                  return order.state === "Đã hủy";
              })
            : "";

    const onChange = (key) => {
        console.log(key);
    };

    return (
        <>
            <div className='body-myorder'>
                <div id='my-info' className='grid wide'>
                    <div className='contain-myorder'>
                        <Tabs onChange={onChange} type='card'>
                            <TabPane tab='Tất cả' key='1'>
                                {orders !== undefined ? (
                                    <ul>
                                        {orders.map((item, index) => {
                                            return (
                                                <li
                                                    key={item.id}
                                                    style={{
                                                        position: "relative",
                                                        fontSize: 16,
                                                    }}
                                                >
                                                    <div className='item-order'>
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                justifyContent: "space-around",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "flex",
                                                                    flexDirection: "column",
                                                                    flex: 2,
                                                                    marginLeft: 20,
                                                                    borderLeft: "1px solid gray",
                                                                    paddingLeft: 10,
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        display: "flex",
                                                                    }}
                                                                >
                                                                    <img
                                                                        src='../../../../../image/header/TN__logo.png'
                                                                        alt=''
                                                                        style={{
                                                                            width: 60,
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div>
                                                                    Ngày đặt hàng: {new Date(item.createAt).toLocaleDateString("vn-VN")}
                                                                    <div>ID ĐƠN HÀNG: {item.id}</div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                style={{
                                                                    display: "flex",
                                                                    flex: "5 1 0",
                                                                    borderLeft: "1px solid gray",
                                                                    paddingLeft: 10,
                                                                }}
                                                            >
                                                                <div>08:12 13-06-2022 Đơn hàng đã đến kho 50-HCM Tan Phu/Tan Quy SOC</div>
                                                            </div>
                                                            <div
                                                                style={{
                                                                    display: "flex",
                                                                    flexDirection: "column",
                                                                    flex: "3 1 0",
                                                                    borderLeft: "1px solid gray",
                                                                    paddingLeft: 10,
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        minWidth: 137,
                                                                    }}
                                                                >
                                                                    {/* {item.state} */}
                                                                    Đơn vị vận chuyển : GHTK
                                                                </div>
                                                                <div>Mã vận đơn : SPXVN020548129406</div>
                                                                <div>Thành tiền: {item.sumPayment}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{
                                                            position: "relative",
                                                            minHeight: 50,
                                                        }}
                                                    >
                                                        <Button
                                                            onClick={(e) => handleShow(item)}
                                                            type='primary'
                                                            style={{
                                                                position: "absolute",
                                                                right: 0,
                                                            }}
                                                        >
                                                            Chi tiết đơn hàng
                                                        </Button>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                ) : (
                                    <>Chưa có đơn hàng</>
                                )}
                            </TabPane>
                            <TabPane tab='Chờ thanh toán' key='2'>
                                {wait.length > 0 ? (
                                    <ul>
                                        {wait.map((item, index) => {
                                            return (
                                                <li
                                                    key={item.id}
                                                    style={{
                                                        position: "relative",
                                                        fontSize: 16,
                                                    }}
                                                >
                                                    <div className='item-order'>
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                justifyContent: "space-around",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "flex",
                                                                    flexDirection: "column",
                                                                    flex: 2,
                                                                    marginLeft: 20,
                                                                    borderLeft: "1px solid gray",
                                                                    paddingLeft: 10,
                                                                }}
                                                            >
                                                                <img
                                                                    src='../../../../../image/header/TN__logo.png'
                                                                    alt=''
                                                                    style={{
                                                                        width: 60,
                                                                    }}
                                                                />
                                                                <div>
                                                                    Ngày đặt hàng: {new Date(item.createAt).toLocaleDateString("vn-VN")}
                                                                    <div>ID ĐƠN HÀNG: {item.id}</div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                style={{
                                                                    display: "flex",
                                                                    flex: "5 1 0",
                                                                    borderLeft: "1px solid gray",
                                                                    paddingLeft: 10,
                                                                }}
                                                            >
                                                                <div>08:12 13-06-2022 Đơn hàng đã đến kho 50-HCM Tan Phu/Tan Quy SOC</div>
                                                            </div>
                                                            <div
                                                                style={{
                                                                    display: "flex",
                                                                    flexDirection: "column",
                                                                    flex: "3 1 0",
                                                                    borderLeft: "1px solid gray",
                                                                    paddingLeft: 10,
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        minWidth: 137,
                                                                    }}
                                                                >
                                                                    {/* {item.state} */}
                                                                    Đơn vị vận chuyển : GHTK
                                                                </div>
                                                                <div>Mã vận đơn : SPXVN020548129406</div>
                                                                <div>Thành tiền: {item.sumPayment}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{
                                                            position: "relative",
                                                            minHeight: 50,
                                                        }}
                                                    >
                                                        <Button
                                                            onClick={(e) => handleShow(item)}
                                                            type='primary'
                                                            style={{
                                                                position: "absolute",
                                                                right: 0,
                                                            }}
                                                        >
                                                            Chi tiết đơn hàng
                                                        </Button>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                ) : (
                                    <>Chưa có đơn hàng</>
                                )}
                            </TabPane>
                            <TabPane tab='Chờ xác nhận' key='3'>
                                {waitConfirmation.length > 0 ? (
                                    <ul>
                                        {waitConfirmation.map((item, index) => {
                                            return (
                                                <li
                                                    key={item.id}
                                                    style={{
                                                        position: "relative",
                                                        fontSize: 16,
                                                    }}
                                                >
                                                    <div className='item-order'>
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                justifyContent: "space-around",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "flex",
                                                                    flexDirection: "column",
                                                                    flex: 2,
                                                                    marginLeft: 20,
                                                                    borderLeft: "1px solid gray",
                                                                    paddingLeft: 10,
                                                                }}
                                                            >
                                                                <img
                                                                    src='../../../../../image/header/TN__logo.png'
                                                                    alt=''
                                                                    style={{
                                                                        width: 60,
                                                                    }}
                                                                />
                                                                <div>
                                                                    Ngày đặt hàng: {new Date(item.createAt).toLocaleDateString("vn-VN")}
                                                                    <div>ID ĐƠN HÀNG: {item.id}</div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                style={{
                                                                    display: "flex",
                                                                    flex: "5 1 0",
                                                                    borderLeft: "1px solid gray",
                                                                    paddingLeft: 10,
                                                                }}
                                                            >
                                                                <div>08:12 13-06-2022 Đơn hàng đã đến kho 50-HCM Tan Phu/Tan Quy SOC</div>
                                                            </div>
                                                            <div
                                                                style={{
                                                                    display: "flex",
                                                                    flexDirection: "column",
                                                                    flex: "3 1 0",
                                                                    borderLeft: "1px solid gray",
                                                                    paddingLeft: 10,
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        minWidth: 137,
                                                                    }}
                                                                >
                                                                    {/* {item.state} */}
                                                                    Đơn vị vận chuyển : GHTK
                                                                </div>
                                                                <div>Mã vận đơn : SPXVN020548129406</div>
                                                                <div>Thành tiền: {item.sumPayment}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{
                                                            position: "relative",
                                                            minHeight: 50,
                                                        }}
                                                    >
                                                        <Button
                                                            onClick={(e) => handleShow(item)}
                                                            type='primary'
                                                            style={{
                                                                position: "absolute",
                                                                right: 0,
                                                            }}
                                                        >
                                                            Chi tiết đơn hàng
                                                        </Button>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                ) : (
                                    <>Chưa có đơn hàng</>
                                )}
                            </TabPane>
                            <TabPane tab='Đang giao hàng' key='4'>
                                {delivery.length > 0 ? (
                                    <ul>
                                        {delivery.map((item, index) => {
                                            return (
                                                <li
                                                    key={item.id}
                                                    style={{
                                                        position: "relative",
                                                        fontSize: 16,
                                                    }}
                                                >
                                                    <div className='item-order'>
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                justifyContent: "space-around",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "flex",
                                                                    flexDirection: "column",
                                                                    flex: 2,
                                                                    marginLeft: 20,
                                                                    borderLeft: "1px solid gray",
                                                                    paddingLeft: 10,
                                                                }}
                                                            >
                                                                <img
                                                                    src='../../../../../image/header/TN__logo.png'
                                                                    alt=''
                                                                    style={{
                                                                        width: 60,
                                                                    }}
                                                                />
                                                                <div>
                                                                    Ngày đặt hàng: {new Date(item.createAt).toLocaleDateString("vn-VN")}
                                                                    <div>ID ĐƠN HÀNG: {item.id}</div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                style={{
                                                                    display: "flex",
                                                                    flex: "5 1 0",
                                                                    borderLeft: "1px solid gray",
                                                                    paddingLeft: 10,
                                                                }}
                                                            >
                                                                <div>08:12 13-06-2022 Đơn hàng đã đến kho 50-HCM Tan Phu/Tan Quy SOC</div>
                                                            </div>
                                                            <div
                                                                style={{
                                                                    display: "flex",
                                                                    flexDirection: "column",
                                                                    flex: "3 1 0",
                                                                    borderLeft: "1px solid gray",
                                                                    paddingLeft: 10,
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        minWidth: 137,
                                                                    }}
                                                                >
                                                                    {/* {item.state} */}
                                                                    Đơn vị vận chuyển : GHTK
                                                                </div>
                                                                <div>Mã vận đơn : SPXVN020548129406</div>
                                                                <div>Thành tiền: {item.sumPayment}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{
                                                            position: "relative",
                                                            minHeight: 50,
                                                        }}
                                                    >
                                                        <Button
                                                            onClick={(e) => handleShow(item)}
                                                            type='primary'
                                                            style={{
                                                                position: "absolute",
                                                                right: 0,
                                                            }}
                                                        >
                                                            Chi tiết đơn hàng
                                                        </Button>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                ) : (
                                    <>Chưa có đơn hàng</>
                                )}
                            </TabPane>
                            <TabPane tab='Đã giao' key='5'>
                                {success.length > 0 ? (
                                    <ul>
                                        {success.map((item, index) => {
                                            return (
                                                <li
                                                    key={item.id}
                                                    style={{
                                                        position: "relative",
                                                        fontSize: 16,
                                                    }}
                                                >
                                                    <div className='item-order'>
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                justifyContent: "space-around",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "flex",
                                                                    flexDirection: "column",
                                                                    flex: 2,
                                                                    marginLeft: 20,
                                                                    borderLeft: "1px solid gray",
                                                                    paddingLeft: 10,
                                                                }}
                                                            >
                                                                <img
                                                                    src='../../../../../image/header/TN__logo.png'
                                                                    alt=''
                                                                    style={{
                                                                        width: 60,
                                                                    }}
                                                                />
                                                                <div>
                                                                    Ngày đặt hàng: {new Date(item.createAt).toLocaleDateString("vn-VN")}
                                                                    <div>ID ĐƠN HÀNG: {item.id}</div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                style={{
                                                                    display: "flex",
                                                                    flex: "5 1 0",
                                                                    borderLeft: "1px solid gray",
                                                                    paddingLeft: 10,
                                                                }}
                                                            >
                                                                <div>08:12 13-06-2022 Đơn hàng đã đến kho 50-HCM Tan Phu/Tan Quy SOC</div>
                                                            </div>
                                                            <div
                                                                style={{
                                                                    display: "flex",
                                                                    flexDirection: "column",
                                                                    flex: "3 1 0",
                                                                    borderLeft: "1px solid gray",
                                                                    paddingLeft: 10,
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        minWidth: 137,
                                                                    }}
                                                                >
                                                                    {/* {item.state} */}
                                                                    Đơn vị vận chuyển : GHTK
                                                                </div>
                                                                <div>Mã vận đơn : SPXVN020548129406</div>
                                                                <div>Thành tiền: {item.sumPayment}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{
                                                            position: "relative",
                                                            minHeight: 50,
                                                        }}
                                                    >
                                                        <Button
                                                            onClick={(e) => handleShow(item)}
                                                            type='primary'
                                                            style={{
                                                                position: "absolute",
                                                                right: 150,
                                                                marginRight: 20,
                                                            }}
                                                        >
                                                            Chi tiết đơn hàng
                                                        </Button>
                                                        <Popconfirm title='Xác nhận đã nhận được hàng ?' onConfirm={(e) => handConfirm(item)}>
                                                            <Button
                                                                type='primary'
                                                                style={{
                                                                    position: "absolute",
                                                                    right: 0,
                                                                }}
                                                            >
                                                                Đã nhận được hàng
                                                            </Button>
                                                        </Popconfirm>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                ) : (
                                    <>Chưa có đơn hàng</>
                                )}
                            </TabPane>
                            <TabPane tab='Đơn hàng đã hoàn thành' key='6'>
                                {complete.length > 0 ? (
                                    <ul>
                                        {complete.map((item, index) => {
                                            return (
                                                <li
                                                    key={item.id}
                                                    style={{
                                                        position: "relative",
                                                        fontSize: 16,
                                                    }}
                                                >
                                                    <div className='item-order'>
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                justifyContent: "space-around",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "flex",
                                                                    flexDirection: "column",
                                                                    flex: 2,
                                                                    marginLeft: 20,
                                                                    borderLeft: "1px solid gray",
                                                                    paddingLeft: 10,
                                                                }}
                                                            >
                                                                <img
                                                                    src='../../../../../image/header/TN__logo.png'
                                                                    alt=''
                                                                    style={{
                                                                        width: 60,
                                                                    }}
                                                                />
                                                                <div>
                                                                    Ngày đặt hàng: {new Date(item.createAt).toLocaleDateString("vn-VN")}
                                                                    <div>ID ĐƠN HÀNG: {item.id}</div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                style={{
                                                                    display: "flex",
                                                                    flex: "5 1 0",
                                                                    borderLeft: "1px solid gray",
                                                                    paddingLeft: 10,
                                                                }}
                                                            >
                                                                <div>08:12 13-06-2022 Đơn hàng đã đến kho 50-HCM Tan Phu/Tan Quy SOC</div>
                                                            </div>
                                                            <div
                                                                style={{
                                                                    display: "flex",
                                                                    flexDirection: "column",
                                                                    flex: "3 1 0",
                                                                    borderLeft: "1px solid gray",
                                                                    paddingLeft: 10,
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        minWidth: 137,
                                                                    }}
                                                                >
                                                                    {/* {item.state} */}
                                                                    Đơn vị vận chuyển : GHTK
                                                                </div>
                                                                <div>Mã vận đơn : SPXVN020548129406</div>
                                                                <div>Thành tiền: {item.sumPayment}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{
                                                            position: "relative",
                                                            minHeight: 50,
                                                        }}
                                                    >
                                                        <Button
                                                            onClick={(e) => handleShow(item)}
                                                            type='primary'
                                                            style={{
                                                                position: "absolute",
                                                                right: 0,
                                                            }}
                                                        >
                                                            Chi tiết đơn hàng
                                                        </Button>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                ) : (
                                    <>Chưa có đơn hàng</>
                                )}
                            </TabPane>
                            <TabPane tab='Đã hủy' key='7'>
                                {cancelOr.length > 0 ? (
                                    <ul>
                                        {cancelOr.map((item, index) => {
                                            return (
                                                <li
                                                    key={item.id}
                                                    style={{
                                                        position: "relative",
                                                        fontSize: 16,
                                                    }}
                                                >
                                                    <div className='item-order'>
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                justifyContent: "space-around",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "flex",
                                                                    flexDirection: "column",
                                                                    flex: 2,
                                                                    marginLeft: 20,
                                                                    borderLeft: "1px solid gray",
                                                                    paddingLeft: 10,
                                                                }}
                                                            >
                                                                <img
                                                                    src='../../../../../image/header/TN__logo.png'
                                                                    alt=''
                                                                    style={{
                                                                        width: 60,
                                                                    }}
                                                                />
                                                                <div>
                                                                    Ngày đặt hàng: {new Date(item.createAt).toLocaleDateString("vn-VN")}
                                                                    <div>ID ĐƠN HÀNG: {item.id}</div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                style={{
                                                                    display: "flex",
                                                                    flex: "5 1 0",
                                                                    borderLeft: "1px solid gray",
                                                                    paddingLeft: 10,
                                                                }}
                                                            >
                                                                <div>08:12 13-06-2022 Đơn hàng đã đến kho 50-HCM Tan Phu/Tan Quy SOC</div>
                                                            </div>
                                                            <div
                                                                style={{
                                                                    display: "flex",
                                                                    flexDirection: "column",
                                                                    flex: "3 1 0",
                                                                    borderLeft: "1px solid gray",
                                                                    paddingLeft: 10,
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        minWidth: 137,
                                                                    }}
                                                                >
                                                                    {/* {item.state} */}
                                                                    Đơn vị vận chuyển : GHTK
                                                                </div>
                                                                <div>Mã vận đơn : SPXVN020548129406</div>
                                                                <div>Thành tiền: {item.sumPayment}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{
                                                            position: "relative",
                                                            minHeight: 50,
                                                        }}
                                                    >
                                                        <Button
                                                            onClick={(e) => handleShow(item)}
                                                            type='primary'
                                                            style={{
                                                                position: "absolute",
                                                                right: 0,
                                                            }}
                                                        >
                                                            Chi tiết đơn hàng
                                                        </Button>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                ) : (
                                    <>Chưa có đơn hàng</>
                                )}
                            </TabPane>
                        </Tabs>
                        <ModalShow input={orderDetail} visible={visibleShow} onClose={() => setVisibleShow(false)} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyOrder;
