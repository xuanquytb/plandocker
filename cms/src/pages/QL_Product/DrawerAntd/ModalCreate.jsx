import React, { useState } from "react";
import ReactQuill from "react-quill";
import { modules, formats } from "./Editor/EditorToolbar";
import "react-quill/dist/quill.snow.css";
import { useSelector } from "react-redux";
import "./Editor/style.css";
import { toast } from "react-toastify";

import {
  Modal,
  Tabs,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  Upload,
  InputNumber,
} from "antd";

const { TabPane } = Tabs;

const { Option, OptGroup } = Select;

const ModalCreate = ({ visible, onClose, handleRegister }) => {
  const { categorys } = useSelector((state) => state.category);
  const formRef = React.useRef(null);
  const brands = [
    {
      id: 1,
      nameManufacturer: "SAMSUNG",
    },
    {
      id: 2,
      nameManufacturer: "ASUS",
    },
    {
      id: "3",
      nameManufacturer: "Apple",
    },
    {
      id: "4",
      nameManufacturer: "MSI",
    },
  ];

  const [state, setState] = useState({ value: "" });

  const [quantityUnit, setQuantityUnit] = useState(1);
  const [disable, setDisable] = useState(true);
  const [fileList, setFileList] = useState([]);
  const [arrGallery, setArrGallery] = useState([]);

  //////////////////////////////////////////////////////////
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("");
  const [warranty, setWarranty] = useState("");
  const [origin, setOrigin] = useState("");
  const [unit, setUnit] = useState("");
  //////////////////////////////////////////////////////////

  const handleChange = (value) => {
    setState({ value });
  };

  const onChange = ({ fileList: newFileList }) => {
    let arrTemp = newFileList?.map((item) => {
      return item?.response?.fileName;
    });
    setArrGallery(arrTemp);
    setFileList(newFileList);
    setState({ value: "" });
  };

  const onFinish = (values) => {
    if (state.value === "") {
      toast.success("Chưa nhập chi tiết sản phẩm");
    } else {
      const productCreate = {
        nameProduct: values.nameProduct,
        description: state.value,
        warranty: warranty,
        quantity: quantity,
        price: values.price,
        priceIn: values.priceIn,
        promotional: values.discount,
        status: values.state,
        image: arrGallery[0],
        gallery: arrGallery,
        idCategory: category,
        idInvoiceIn: 1,
        idUnit: unit,
        idManufacturer: brand,
        idOrigin: origin,
      };

      handleRegister(productCreate);

      formRef.current?.resetFields();
      setFileList([]);
    }
  };

  const handChangeQuantityUniti = (e) => {
    setQuantityUnit(e.target.value);
  };

  const handChangeQuantity = (e) => {
    if (disable === true) {
      setQuantity(e.target.value * 1);
    }
    if (disable === false) {
      setQuantity(e.target.value * quantityUnit);
    }
  };

  const onChangeUnit = (e) => {
    setUnit(e);
    if (e === "1") {
      setDisable(true);
    }
    if (e === "2") {
      setDisable(false);
    }
  };
  return (
    <>
      <Modal
        centered
        open={visible}
        onCancel={onClose}
        width={1000}
        footer={[]}
      >
        <Tabs type="card">
          <TabPane tab="Thông tin chính" key="1">
            <Form
              layout="vertical"
              requiredMark
              onFinish={onFinish}
              initialValues={{
                quantityUniti: "1",
                unitSL: "1",
                discount: "1",
              }}
              ref={formRef}
            >
              <Row gutter={16}>
                <Col span={6}>
                  <Form.Item
                    label="Tên sản phẩm"
                    name="nameProduct"
                    rules={[
                      {
                        required: true,
                        message: "Tên sản phẩm không được để trống",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Tên sản phẩm"
                      allowClear
                      maxLength={150}
                      showCount
                    />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item
                    label="Giá nhập sản phẩm"
                    name="priceIn"
                    rules={[
                      {
                        required: true,
                        message: "Giá sản phẩm không được để trống",
                      },
                    ]}
                  >
                    <Input placeholder="Giá nhập sản phẩm" allowClear />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item
                    label="Giá bán sản phẩm"
                    name="price"
                    rules={[
                      {
                        required: true,
                        message: "Giá sản phẩm không được để trống",
                      },
                    ]}
                  >
                    <Input placeholder="Giá bán sản phẩm" allowClear />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item name="discount" label="Giảm giá (%)">
                    <InputNumber min={1} maxLength={2} style={{ height: 39 }} />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={6}>
                  <Form.Item
                    name="category"
                    label="Chọn danh mục sản phẩm"
                    rules={[
                      {
                        required: true,
                        message: "Bạn chưa chọn danh mục sản phẩm",
                      },
                    ]}
                  >
                    <Select onChange={(e) => setCategory(e)}>
                      {categorys?.map((item, index) => {
                        return (
                          <Select.Option key={item.id} value={item.id}>
                            {item.nameCategory}
                          </Select.Option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item
                    name="warranty"
                    label="Thời gian đổi trả"
                    rules={[
                      {
                        required: true,
                        message: "Bạn chưa chọn thời gian đổi trả",
                      },
                    ]}
                  >
                    <Select onChange={(e) => setWarranty(e)}>
                      <OptGroup label="Thời gian đổi trả">
                        <Option value="1">1 ngày</Option>
                        <Option value="2">2 ngày</Option>
                        <Option value="3">3 ngày</Option>
                        <Option value="4">4 ngày</Option>
                        <Option value="5">5 ngày</Option>
                        <Option value="6">6 ngày</Option>
                        <Option value="7">7 ngày</Option>
                      </OptGroup>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item
                    name="brand"
                    label="Chọn thương hiệu sản phẩm"
                    rules={[
                      {
                        required: true,
                        message: "Bạn chưa chọn thương hiệu sản phẩm",
                      },
                    ]}
                  >
                    <Select onChange={(e) => setBrand(e)}>
                      {brands?.map((item, index) => {
                        return (
                          <Select.Option key={item.id} value={item.id}>
                            {item.nameManufacturer}
                          </Select.Option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item
                    name="origin"
                    label="Xuất xứ"
                    rules={[
                      {
                        required: true,
                        message: "Bạn chưa chọn xuất xứ",
                      },
                    ]}
                  >
                    <Select onChange={(e) => setOrigin(e)}>
                      <OptGroup label="Xuất xứ">
                        <Option value="1">Việt Nam</Option>
                        <Option value="2">Trung Quốc</Option>
                      </OptGroup>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={7}>
                  <Form.Item
                    name="uniti"
                    label="Chọn đơn vị tính"
                    rules={[
                      {
                        required: true,
                        message: "Bạn chưa chọn đơn vị tính",
                      },
                    ]}
                  >
                    <Select style={{ width: 250 }} onChange={onChangeUnit}>
                      <OptGroup label="Đơn vị tính">
                        <Option value="1">Chiếc</Option>
                        <Option value="2">Thùng</Option>
                      </OptGroup>
                    </Select>
                  </Form.Item>
                </Col>

                <Col span={6}>
                  <Form.Item name="quantityUniti" label="Số lượng">
                    <Input
                      disabled={disable}
                      allowClear
                      onChange={handChangeQuantityUniti}
                    />
                  </Form.Item>
                </Col>

                <Col span={5}>
                  <Form.Item
                    name="unitSL"
                    label="Số lượng / đơn vị"
                    rules={[
                      {
                        required: true,
                        message: "Số lượng / đơn vị không dược để trống",
                      },
                    ]}
                  >
                    <Input
                      placeholder="00000000000000"
                      allowClear
                      onChange={handChangeQuantity}
                    />
                  </Form.Item>
                </Col>

                <Col span={6}>
                  <Form.Item name="quantity" label="Số lượng sản phẩm">
                    <Input
                      placeholder={quantity}
                      // onChange={(quantity) =>
                      //     console.log(quantity)
                      // }
                      disabled
                      allowClear
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="nameImage" label="Hình ảnh sản phẩm">
                    <Upload
                      action={`${process.env.REACT_APP_BACKEND}api/images/upload/products`}
                      listType="picture"
                      fileList={fileList}
                      onChange={onChange}
                      name="gallery"
                    >
                      {fileList.length < 8 && "+ Chọn ảnh"}
                    </Upload>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={19}>
                <Col span={20}>
                  <Form.Item name="state" label="Trạng thái" width={600}>
                    <Select
                      style={{ width: 250 }}
                      onChange={(value) => {
                        console.log(value);
                      }}
                    >
                      <OptGroup label="Trạng thái">
                        <Option value="Còn hàng">Còn hàng</Option>
                        <Option value="Hết hàng">Hết hàng</Option>
                      </OptGroup>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Thêm sản phẩm
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="Mô tả sản phẩm" key="2">
            <div className="addNew__container">
              {/* <EditorToolbar /> */}
              <ReactQuill
                style={{ minHeight: 500 }}
                theme="snow"
                value={state.value}
                onChange={handleChange}
                placeholder={"Nội dung bài viết..."}
                modules={modules}
                formats={formats}
              />
            </div>
          </TabPane>
        </Tabs>
      </Modal>
    </>
  );
};

export default ModalCreate;
