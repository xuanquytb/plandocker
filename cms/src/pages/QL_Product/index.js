import React, { useState, useRef } from "react";
import { Table, Button, Popconfirm, Input, Space } from "antd";

import axios from "axios";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";

import "./css/ProductStyle.css";
import styleTables from "./scss/styleTables.module.scss";
import { useDispatch, useSelector } from "react-redux";
import ModalCreate from "./DrawerAntd/ModalCreate";
import {
  addProduct,
  deleteProduct,
  setProducts,
  updateProduct,
} from "../../store/Products/ProductSlice";
import ShowDrawer from "./DrawerAntd/ShowDrawer";

import ModalUpdateProduct from "./DrawerAntd/ModalUpdateProduct";

const Product = () => {
  const { products } = useSelector((state) => state.products);

  const [visibleShow, setVisibleShow] = useState(false);

  const [visibleCreate, setVisibleCreate] = useState(false);
  const [, setInsurance] = useState(false);
  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const [product, setProduct] = useState({});
  const [productEdit, setProductEdit] = useState({});

  //////////////////////////
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        className="inputSearchAdmin"
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  /////////////////////////////////////////////////

  const handleDelete = async (id) => {
    dispatch(deleteProduct(id.key));
    let cloneList = products.filter((item) => {
      return item.id !== id.key;
    });

    dispatch(setProducts(cloneList));
  };
  const onClose = () => {
    setVisibleShow(false);
    setVisibleUpdate(false);
    setVisibleCreate(false);
    setInsurance(false);
  };

  const handleShow = async (record) => {
    setProduct({
      nameProduct: record.nameProduct,
      description: record.description,
      warranty: record.warranty,
      quantity: record.quantity,
      promotional: record.promotional,
      price: record.price,
      status: record.status,
      image: record.image,
      gallery: record.gallery,
      idCategory: record.idCategory,
      idUnit: record.idUnit,
      idManufacturer: record.idManufacturer,
      idOrigin: record.idOrigin,
      key: record.key,
    });
    setVisibleShow(true);
  };

  const dispatch = useDispatch();

  const handleCrate = async (product) => {
    dispatch(addProduct(product));
  };

  const handleUpdate = async (record) => {
    const result = await axios.get(
      `${process.env.REACT_APP_BACKEND}api/product/find/${record.key}`
    );
    setProductEdit(result.data.product);
    setVisibleUpdate(true);
  };
  const clickUpdate = async (record) => {
    dispatch(updateProduct(record));
  };

  const dataSource =
    products?.length > 0
      ? products.map((product) => {
          return {
            nameProduct: product.nameProduct,
            description: product.description,
            warranty: product.warranty,
            quantity: product.quantity,
            promotional: product.promotional,
            priceIn: product.priceIn,
            price: product.price.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            }),
            status: product.status,
            image: product.image,
            idInvoiceIn: product.idInvoiceIn,
            idCategory: product.idCategory,
            idUnit: product.idUnit,
            idManufacturer: product.idManufacturer,
            idOrigin: product.idOrigin,
            key: product.id,
          };
        })
      : [];

  const columns = [
    {
      title: "STT",
      width: "7%",
      dataIndex: "key",
      key: "key",
      fixed: "left",
      ...getColumnSearchProps("key"),
    },
    {
      title: "Tên sản phẩm",
      width: "45%",
      dataIndex: "nameProduct",
      key: "nameProduct",
      fixed: "left",
      ...getColumnSearchProps("nameProduct"),
    },
    {
      title: "Giá bán",
      dataIndex: "price",
      key: "price",
      width: 60,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      width: 60,
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
      width: 50,
    },
    {
      title: "Thao Tác",
      width: "15%",
      key: "4",
      dataIndex: "operation",
      render: (_, record) =>
        products?.length >= 0 ? (
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
              title="Bạn chắc chắn muốn xóa ?"
              onConfirm={() => handleDelete(record)}
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
                  <path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z" />
                </svg>
              </Button>
            </Popconfirm>
            <Popconfirm
              title="Bạn chắc chắn muốn sửa sản phẩm ?"
              onConfirm={() => handleUpdate(record)}
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
  const handleShowCreate = async () => {
    setVisibleCreate(true);
  };
  return (
    <>
      <div className="content-product">
        <Button
          className="btn-addNew"
          type="primary"
          style={{
            marginBottom: 16,
          }}
          onClick={() => handleShowCreate()}
        >
          Thêm sản phẩm
        </Button>

        <Table
          rowClassName={() => "editable-row"}
          bordered
          dataSource={dataSource.reverse()}
          columns={columns}
          scroll={{ y: 350 }}
          style={{ minHeight: "350px !important" }}
          className={styleTables.custom_information_table}
        />
      </div>
      <ModalUpdateProduct
        input={productEdit}
        visible={visibleUpdate}
        onClose={onClose}
        onUpdate={clickUpdate}
      />
      <ModalCreate
        visible={visibleCreate}
        onClose={() => setVisibleCreate(false)}
        handleRegister={handleCrate}
      />
      <ShowDrawer input={product} visible={visibleShow} onClose={onClose} />
      {/* 
            <ShowDrawer input={product} visible={visibleShow} onClose={onClose} />
            <ShowDrawerInsurance
                // input={product}
                visible={insurance}
                onClose={onClose}
            />
            <ModalUpdateProduct input={productEdit} visible={visibleUpdate} onClose={onClose} onUpdate={clickUpdate} /> */}
    </>
  );
};

export default Product;
