import React from "react";
import Container from "react-bootstrap/Container";
import Banner from "../../../../../../asset/banner.jpg";
import { Input, Button } from "antd";
import "./index.scss";
import { SendOutlined } from "@ant-design/icons";
import { Form } from "antd";
export default function Advertisement() {
  const submitEmail = (e) => {
    console.log(e.target.value);
  };
  return (
    <Container fluid style={{ marginTop: "10px" }} className="banner">
      <Container className="banner__content">
        <h2>Đăng ký nhận Email nhận tin mới nhất</h2>
        <hr className="banner__content-line" />
        <form onChange={submitEmail}>
          <Input placeholder="Nhập email" className="banner__content-input" />
        </form>

        <Button
          type="primary"
          className="banner__content-btn"
          icon={<SendOutlined />}
        >
          Gửi
        </Button>
      </Container>
    </Container>
  );
}
