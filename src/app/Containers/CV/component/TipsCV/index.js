import React from "react";
import "./index.scss";
import { Button, Form } from "antd";
import { CheckOutlined } from "@ant-design/icons";
export default function TipsCV() {
  return (
    <div className="tipsCV">
      <div className="tipsCV__content">
        <h2>Tips: </h2>
        <div className="tipsCV__content-des">
          <p>
            <CheckOutlined /> Lưu ý Chỉnh sửa thông tin công việc mong muốn.
          </p>
          <p>
            <CheckOutlined /> Ấn trực tiếp vào các phần thông tin để chỉnh sửa.
          </p>
          <p>
            <CheckOutlined /> Nhập đầy đủ các thông tin hiển thị trong hồ sơ.
          </p>
          <p>
            <CheckOutlined /> Bấm nút “ Lưu hồ sơ ” để lưu thông tin hồ sơ.
          </p>
          {/* <p>
            <CheckOutlined /> Hoặc bấm nút “ Tải xuống hồ sơ ” để tải về file hồ
            sơ có định dạng PDF.
          </p> */}
        </div>
      </div>

      <div className="tipsCV__btn">
        <Form.Item>
          <Button type="primary" htmlType="submit" className="tipsCV__btn-cus">
            Lưu hồ sơ
          </Button>
        </Form.Item>
        {/* <Button type="primary" className="tipsCV__btn-cus">
          Tải xuống hồ sơ
        </Button> */}
      </div>
    </div>
  );
}
