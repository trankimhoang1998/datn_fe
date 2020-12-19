import "./index.scss";
import { Form, Button, Row, Input, Col } from "antd";
import { UploadImage } from "../../../../../../helper/uploadImage";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchInfoEmployerRequest,
  updateInfoEmployerRequest,
} from "../../../../../../redux/actionCreators/employerActionCreator";
import jwtDecode from "jwt-decode";
import { getAccessToken } from "../../../../../../helper/localStorage";

export default function InforEmployer() {
  let token = getAccessToken();
  if (token) {
    var id = jwtDecode(token).sub;
  }

  const infoEmployer = useSelector((state) => state.employer.infoEmployer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInfoEmployerRequest(id));
  }, [dispatch]);

  const onFinish = (value) => {
    const newValue = {
      ...value,
      avatar: value.avatar.fileList[0].thumbUrl,
      photo: value.photo.fileList[0].thumbUrl,
    };

    dispatch(updateInfoEmployerRequest(infoEmployer.result[0].id, newValue));
  };

  const [form] = Form.useForm();
  const { setFieldsValue } = form;

  useEffect(() => {
    if (infoEmployer.result[0]) {
      setFieldsValue({
        company: infoEmployer.result[0].company
          ? infoEmployer.result[0].company
          : "Đang cập nhật",
      });
      setFieldsValue({
        contact: infoEmployer.result[0].contact
          ? infoEmployer.result[0].contact
          : "Đang cập nhật",
      });
      setFieldsValue({
        address: infoEmployer.result[0].address
          ? infoEmployer.result[0].address
          : "Đang cập nhật",
      });
      setFieldsValue({
        phone: infoEmployer.result[0].phone
          ? infoEmployer.result[0].phone
          : "Đang cập nhật",
      });
      setFieldsValue({
        website: infoEmployer.result[0].website
          ? infoEmployer.result[0].website
          : "Đang cập nhật",
      });
      setFieldsValue({
        description: infoEmployer.result[0].description
          ? infoEmployer.result[0].description
          : "Đang cập nhật",
      });
    }
    return setFieldsValue({});
  }, [infoEmployer.result[0]]);

  return (
    <Form form={form} onFinish={onFinish}>
      <div className="info__employers">
        <div className="info__employers-avatar">
          <div>
            <h6>Ảnh đại diện</h6>
            <UploadImage name="avatar" url={infoEmployer.result[0].avatar} />
          </div>
          <div>
            <h6>Ảnh bìa</h6>
            <UploadImage name="photo" url={infoEmployer.result[0].photo} />
          </div>
        </div>
        <h6>Tên công ty</h6>
        <Form.Item
          name="company"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tên công ty",
            },
          ]}
        >
          <Input
            className="info__employers-input"
            placeholder="Axon Acitve Viet Nam"
          />
        </Form.Item>
        <h6>Tên liên hệ</h6>
        <Form.Item
          name="contact"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tên liên hệ",
            },
          ]}
        >
          <Input
            className="info__employers-input"
            placeholder="Trần Kim Hoàng"
          />
        </Form.Item>
        <Row>
          <Col span={12}>
            <div>
              <h6>Địa chỉ</h6>
              <Form.Item
                name="address"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập địa chỉ",
                  },
                ]}
              >
                <Input
                  className="info__employers-input"
                  placeholder="Đà Nẵng"
                />
              </Form.Item>
              <h6>Số điện thoại</h6>
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập số điện thoại",
                  },
                ]}
              >
                <Input
                  className="info__employers-input"
                  placeholder="0347971116"
                />
              </Form.Item>
            </div>
          </Col>
          <Col span={12}>
            <div>
              <h6>website</h6>
              <Form.Item
                name="website"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập địa chỉ website",
                  },
                ]}
              >
                <Input
                  className="info__employers-input"
                  placeholder="axon.vn"
                />
              </Form.Item>
              <h6>Mô Tả</h6>
              <Form.Item
                name="description"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mô tả",
                  },
                ]}
              >
                <Input
                  className="info__employers-input"
                  placeholder="Gia công phần mềm"
                />
              </Form.Item>
            </div>
          </Col>
        </Row>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="info__employers-btn"
          >
            Cập nhật
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}
