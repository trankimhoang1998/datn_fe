import { CloseSquareOutlined, UserAddOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import JwtDecode from "jwt-decode";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccessToken } from "../../../../../../helper/localStorage";
import { dashboardCandidateRequest } from "../../../../../../redux/actionCreators/candidateActionCreator";
import InforCandidate from "../InforCandidate";
import "./index.scss";

export default function MainDashBroad() {
  let token = getAccessToken();
  if (token) {
    var id = JwtDecode(token).sub;
  }

  const dispatch = useDispatch();
  const dashboardCandidate = useSelector(
    (state) => state.candidate.dashboardCandidate
  );

  useEffect(() => {
    dispatch(dashboardCandidateRequest(id));
  }, [dispatch]);

  return (
    <>
      <div className="maindb">
        <div className="maindb__cover"></div>
        <div className="maindb__info">
          <div className="maindb__info-item">
            <h3>{dashboardCandidate.result.job}</h3>
            <h5>
              <CloseSquareOutlined />
              Việc làm đã Apply
            </h5>
          </div>
          <div className="maindb__info-item">
            <h3>{dashboardCandidate.result.cv}</h3>
            <h5>
              <UserAddOutlined />
              CV đã tạo
            </h5>
          </div>
        </div>
      </div>
      <div className="info-detail">
        <Row>
          <Col span={24}>
            <InforCandidate />
          </Col>
        </Row>
      </div>
    </>
  );
}
