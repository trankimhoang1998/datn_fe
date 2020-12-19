import React from "react";
import Container from "react-bootstrap/Container";
import { HandleChangeTitle } from "../../../../helper/handleTitle";
import MainDashBroad from "./component/MainDashbroad";

export default function EmployerDashbroad() {
  return (
    <div>
      <HandleChangeTitle title="DashBroad Nhà tuyển dụng" />
      <Container>
        <MainDashBroad />
      </Container>
    </div>
  );
}
