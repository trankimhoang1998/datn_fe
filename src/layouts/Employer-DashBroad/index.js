import React, { Suspense } from "react";
import "antd/dist/antd.css";
import { Skeleton } from "antd";
import SibarMenu from "./Component/SibarMenu";
import Container from "react-bootstrap/Container";
import { Row, Col } from "antd";
import Header from "../Client/Component/header";

function EmployerDashBroad(props) {
  return (
    <>
      <Header />
      <Container style={{ padding: "15px 0" }}>
        <Row>
          <Col span={6}>
            <SibarMenu />
          </Col>
          <Col span={18}>
            <Suspense fallback={<Skeleton active />}>{props.children}</Suspense>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default EmployerDashBroad;
