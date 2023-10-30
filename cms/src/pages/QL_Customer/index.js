import React, { useState } from "react";
import { Table, Button, Popconfirm } from "antd";

import styleTables from "./scss/styleTables.module.scss";
import { useSelector } from "react-redux";
import ShowDrawer from "./Antd/DrawerCustomerShow";

const UserContent = () => {
  const { userCustomer } = useSelector((state) => state.account);

  const [visibleShow, setVisibleShow] = useState(false);
  const [, setVisibleUpdate] = useState(false);
  const [user, setUser] = useState({});
  const [, setUseruserEdit] = useState({});

  const dataSource =
    userCustomer.length > 0
      ? userCustomer?.map((users) => {
          return {
            username: users.username,
            fullname: users.fullname,
            email: users.email,
            phone: users.phone,
            address: users.address,
            nameAvata: users.nameAvata,
            sex: users.sex,
            ngaysinh: users.dateOfBirth,
            key: users.id,
          };
        })
      : [];

  const onClose = () => {
    setVisibleShow(false);
    setVisibleUpdate(false);
  };

  const handleShow = async (record) => {
    console.log(record);
    setUser({
      username: record.username,
      fullname: record.fullname,
      email: record.email,
      phone: record.phone,
      address: record.address,
      sex: record.sex,
      nameAvata: record.nameAvata,
      ngaysinh: record.ngaysinh,
      id: record.key,
    });
    setVisibleShow(true);
  };
  const handleEdit = async (record) => {
    setUseruserEdit({
      username: record.username,
      fullname: record.fullname,
      email: record.email,
      phone: record.phone,
      address: record.address,
      sex: record.sex,
      nameAvata: record.nameAvata,
      ngaysinh: record.ngaysinh,
      id: record.key,
    });
    setVisibleUpdate(true);
  };

  const columns = [
    {
      title: "Họ và tên",
      dataIndex: "fullname",
      key: "fullname",
      width: "23%",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "35%",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      width: "20%",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
      width: "50%",
    },
    {
      title: "Thao Tác",
      width: "15%",
      key: "4",
      dataIndex: "operation",
      render: (_, record) =>
        userCustomer?.length >= 0 ? (
          <>
            <Button
              style={{
                padding: 0,
                width: 30,
                marginRight: 5,
                borderRadius: 20,
              }}
              type="text"
              onClick={() => handleShow(record)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="25"
                height="25"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
              </svg>
            </Button>

            <Popconfirm
              title="Bạn chắc chắn muốn sửa người dùng ?"
              onConfirm={() => handleEdit(record)}
            >
              <Button
                style={{
                  padding: 0,
                  width: 30,
                  marginRight: 5,
                  borderRadius: 20,
                }}
                type="text"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M5 19h1.414l9.314-9.314-1.414-1.414L5 17.586V19zm16 2H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L9.243 19H21v2zM15.728 6.858l1.414 1.414 1.414-1.414-1.414-1.414-1.414 1.414z" />
                </svg>
              </Button>
            </Popconfirm>
          </>
        ) : null,
    },
  ];
  return (
    <>
      <div className="content">
        <Table
          // key={userCustomer._id}
          size="small"
          bordered={false}
          rowClassName={() => "editable-row"}
          dataSource={dataSource}
          columns={columns}
          scroll={{ y: 500 }}
          style={{ marginTop: 50 }}
          className={styleTables.custom_information_table}
        />
      </div>
      <ShowDrawer input={user} visible={visibleShow} onClose={onClose} />
      {/* <ShowDrawer input={user} visible={visibleShow} onClose={onClose} />
            <ShowDrawerForm input={userEdit} visible={visibleUpdate} onClose={onClose} onUpdate={handleUpdate} /> */}
    </>
  );
};

export default UserContent;
