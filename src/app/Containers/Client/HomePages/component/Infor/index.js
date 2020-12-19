import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import CountUp from "react-countup";
import { useDispatch, useSelector } from "react-redux";
import { dashboardClientRequest } from "../../../../../../redux/actionCreators/recruitmentActionCreator";
import "./index.scss";
export default function Infor() {
  const dispatch = useDispatch();
  const dashboardClient = useSelector(
    (state) => state.recruitment.dashboardClient
  );

  useEffect(() => {
    dispatch(dashboardClientRequest());
  }, []);

  return (
    <Container fluid className="main-infor-footer">
      <div className="info-item">
        <CountUp end={dashboardClient.result.recruitments} duration={5} />
        <p>Việc làm</p>
      </div>
      <div className="info-item">
        <CountUp end={dashboardClient.result.employers} duration={5} />
        <p>Nhà tuyển dụng</p>
      </div>
      <div className="info-item">
        <CountUp end={dashboardClient.result.candidates} duration={5} />
        <p>Ứng viên</p>
      </div>
    </Container>
  );
}
