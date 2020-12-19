import React from "react";
import MainDashBroad from "./component/MainDashbroad";
import Container from "react-bootstrap/Container";
import { HandleChangeTitle } from "../../../../helper/handleTitle";

function CandidateDashbroad(props) {
  return (
    <div>
      <HandleChangeTitle title="DashBroad Ứng viên" />
      <Container>
        <MainDashBroad />
      </Container>
    </div>
  );
}

export default CandidateDashbroad;
