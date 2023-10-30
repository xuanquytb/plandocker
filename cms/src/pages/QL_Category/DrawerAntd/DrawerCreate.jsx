import React, { useState, useEffect } from "react";
import { Upload, Drawer, Form, Button, Col, Row, Input } from "antd";

const { TextArea } = Input;

const ShowDrawer = ({ visible, onClose, handleCreate }) => {
  const [fileList, setFileList] = useState([]);
  const formRef = React.useRef(null);
  useEffect(() => {
    setFileList([
      {
        uid: "-1",
        name: "Avata",
        status: "done",
        url: `${process.env.REACT_APP_BACKEND}api/image/${"default.png"}`,
      },
    ]);
  }, []);

  const onFinish = (values) => {
    const category = {
      nameCategory: values.nameCategory,
      description: values.description,
    };
    handleCreate(category);
    formRef.current?.resetFields();
  };

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  return (
    <Drawer
      destroyOnClose
      title={"Tạo mới"}
      open={visible}
      width={500}
      onClose={onClose}
    >
      <Form layout="vertical" ref={formRef} requiredMark onFinish={onFinish}>
        <Row gutter={16}>
          <Col span={9}></Col>
          <Col span={9}>
            <Upload
              disabled
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              name="photo"
            >
              {fileList.length < 1 && "+ Upload"}
            </Upload>
          </Col>
          <Col span={9}></Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Tên ngành hàng" name="nameCategory">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Form.Item
            style={{ marginLeft: "8px" }}
            name="description"
            label="Mô tả"
            rules={[
              {
                required: true,
                message: "Không được để trống",
              },
            ]}
          >
            <TextArea rows={15} style={{ width: "443px", resize: "none" }} />
          </Form.Item>
        </Row>

        <Form.Item wrapperCol={{ offset: 30, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Thêm danh mục
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default ShowDrawer;
