import {
  CheckSquareOutlined,
  CloseSquareOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dashboardAdminRequest } from "../../../../../redux/actionCreators/recruitmentActionCreator";
import "./index.scss";

function Dashboard(props) {
  const dispatch = useDispatch();
  const dashboardAdmin = useSelector(
    (state) => state.recruitment.dashboardAdmin
  );

  useEffect(() => {
    dispatch(dashboardAdminRequest());
  }, [dispatch]);

  return (
    <div className="mainAdmin">
      <div className="mainAdmin__cover"></div>
      <div className="mainAdmin__info">
        <div className="mainAdmin__info-item">
          <h3>{dashboardAdmin.result.recruitments}</h3>
          <h5>
            <PieChartOutlined />
            Việc làm đã duyệt
          </h5>
        </div>
        <div className="mainAdmin__info-item">
          <h3>{dashboardAdmin.result.employers}</h3>
          <h5>
            <CheckSquareOutlined />
            Nhà tuyển dụng đã duyệt
          </h5>
        </div>
        <div className="mainAdmin__info-item">
          <h3>{dashboardAdmin.result.candidates}</h3>
          <h5>
            <CloseSquareOutlined />
            Ứng viên đã duyệt
          </h5>
        </div>
      </div>
      <div className="mainAdmin__info" style={{ marginTop: "30px" }}>
        <div className="mainAdmin__info-item">
          <h3>{dashboardAdmin.result.recruitments_no_active}</h3>
          <h5>
            <PieChartOutlined />
            Việc làm chưa duyệt
          </h5>
        </div>
        <div className="mainAdmin__info-item">
          <h3>{dashboardAdmin.result.employers_no_active}</h3>
          <h5>
            <CheckSquareOutlined />
            Nhà tuyển dụng chưa duyệt
          </h5>
        </div>
        <div className="mainAdmin__info-item">
          <h3>{dashboardAdmin.result.candidates_no_active}</h3>
          <h5>
            <CloseSquareOutlined />
            Ứng viên chưa duyệt
          </h5>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
