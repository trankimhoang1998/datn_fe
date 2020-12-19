import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import {
  PieChartOutlined,
  CheckSquareOutlined,
  CloseSquareOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import InforEmployer from "../InforEmployer";
import { Row, Col } from "antd";
import { getAccessToken } from "../../../../../../helper/localStorage";
import jwtDecode from "jwt-decode";
import { dashboardEmployerRequest } from "../../../../../../redux/actionCreators/employerActionCreator";

export default function MainDashBroad() {
  let token = getAccessToken();
  if (token) {
    var id = jwtDecode(token).sub;
  }

  const dispatch = useDispatch();
  const dashboardEmployer = useSelector(
    (state) => state.employer.dashboardEmployer
  );

  useEffect(() => {
    dispatch(dashboardEmployerRequest(id));
  }, [dispatch]);

  return (
    <>
      <div className="maindb">
        <div className="maindb__cover"></div>
        <div className="maindb__info">
          <div className="maindb__info-item">
            <h3>{dashboardEmployer.result.quantity_recruitment}</h3>

            <h5>
              <PieChartOutlined />
              Tổng số việc làm
            </h5>
          </div>
          <div className="maindb__info-item">
            <h3>{dashboardEmployer.result.quantity_recruitment_active}</h3>

            <h5>
              <CheckSquareOutlined />
              Việc đã duyệt
            </h5>
          </div>
          <div className="maindb__info-item">
            <h3>{dashboardEmployer.result.quantity_recruitment_no_active}</h3>

            <h5>
              <CloseSquareOutlined />
              Việc chưa duyệt
            </h5>
          </div>
          <div className="maindb__info-item">
            <h3>{dashboardEmployer.result.quantity_candidate}</h3>
            <h5>
              <UserAddOutlined />
              Ứng viên ứng tuyển
            </h5>
          </div>
        </div>
      </div>
      <div className="info-detail">
        <Row>
          <Col span={24}>
            <InforEmployer />
          </Col>
        </Row>
      </div>
    </>
  );
}
