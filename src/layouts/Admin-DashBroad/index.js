import { Col, Row, Skeleton } from "antd";
import "antd/dist/antd.css";
import React, { Suspense } from "react";
import { HandleChangeTitle } from "../../helper/handleTitle";
import Header from "../Client/Component/header";
import SibarMenu from "./Component/SibarMenu";

function AdminDashBroad(props) {
  return (
    <>
      <HandleChangeTitle title="DashBroad Admin" />
      <Header />
      <Row>
        <Col span={4}>
          <SibarMenu />
        </Col>
        <Col span={20}>
          <Suspense fallback={<Skeleton active />}>{props.children}</Suspense>
        </Col>
      </Row>
    </>
  );
}

export default AdminDashBroad;
