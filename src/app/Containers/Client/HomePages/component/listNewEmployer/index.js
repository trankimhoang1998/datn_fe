import {
  ExceptionOutlined,
  GlobalOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Badge, Col, Row, Skeleton } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { fetchListEmployerOrderRequest } from "../../../../../../redux/actionCreators/employerActionCreator";
import "./index.scss";
import history from "../../../../../../helper/history";

export default function ListNewEmployer() {
  const employerorder = useSelector(
    (state) => state.employer.listEmployerOrder
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListEmployerOrderRequest());
  }, [dispatch]);

  const data = employerorder.result;

  const handleDeitalEmployer = (id) => {
    history.push(`/employer/${id}`);
  };

  const renderListEmployer = () => {
    let jsx = [];
    if (data.length > 0) {
      jsx = data.map((item, index) => {
        return (
          <Badge.Ribbon
            key={index}
            placement="end"
            text="Top"
            className="custom-notical"
          >
            <div
              className="employer-home"
              onClick={() => handleDeitalEmployer(item.id)}
            >
              <div className="employer-home__cover">
                <img src={item.photo} />
              </div>
              <Row className="employer-home__content">
                <Col className="employer-home__content-avatar">
                  <img src={item.avatar} />
                </Col>
                <Col className="employer-home__content-detail" span={14}>
                  <h3>{item.company}</h3>
                </Col>
                <Col span={2}>
                  <Badge
                    style={{ backgroundColor: "#108ee9" }}
                    className="btn-job-custom"
                    count={item.jobs}
                  >
                    <a>Jobs</a>
                  </Badge>
                </Col>
              </Row>
              <Row>
                <Col className="employer-home__content-dep">
                  <p>
                    <GlobalOutlined /> {item.website}
                  </p>
                  <p>
                    <HomeOutlined /> {item.address}
                  </p>
                  <p>
                    <ExceptionOutlined />
                    {item.description}
                  </p>
                </Col>
              </Row>
            </div>
          </Badge.Ribbon>
        );
      });
      return jsx;
    }
  };
  const dataNull = () => {
    return (
      <>
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
      </>
    );
  };

  return (
    <section className="section" id="employerr">
      <div className="container">
        <Row className="job__title" style={{ backgroundColor: "#F7F7F7" }}>
          <h5>Danh sách nhà tuyển dụng mới nhất</h5>
          <hr className="line-theme" />
          <RouterLink to="/employer">
            <h5>Tất cả nhà tuyển dụng</h5>
          </RouterLink>
        </Row>
        <div className="home-emplyer">
          {data.length > 2 ? renderListEmployer() : dataNull()}
        </div>
      </div>
    </section>
  );
}
