import {
  ExceptionOutlined,
  GlobalOutlined,
  HomeOutlined,
  FrownOutlined,
} from "@ant-design/icons";
import { Badge, Col, Pagination, Row, Skeleton, Result } from "antd";
import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import history from "../../../../../../helper/history";
import { fetchListEmployerRequest } from "../../../../../../redux/actionCreators/employerActionCreator";
import "../../../HomePages/component/listNewEmployer/index.scss";
import "./employer.scss";

export default function Employer(props) {
  const { formState, current, handleCurrent } = props;
  const dispatch = useDispatch();
  const employer = useSelector((state) => state.employer.listEmployer);

  useEffect(() => {
    dispatch(fetchListEmployerRequest(formState.company, 9, 1));
  }, [formState]);

  const handleChangePage = (value) => {
    handleCurrent(value);
    dispatch(fetchListEmployerRequest(formState.company, 9, value));
    window.scrollTo({
      top: 200,

      behavior: "smooth",
    });
  };

  const total = employer.result["total"];
  const data = employer.result["data"];

  const handleDeitalEmployer = (id) => {
    history.push(`/employer/${id}`);
  };
  const renderListEmployer = () => {
    let jsx = [];
    if (data.length > 0) {
      jsx = data.map((item, index) => {
        if (item.order) {
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
                  <img alt={item.company} src={item.photo} />
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
        } else {
          return (
            <div
              key={index}
              className="employer-home"
              onClick={() => handleDeitalEmployer(item.id)}
            >
              <div className="employer-home__cover">
                <img alt={item.company} src={item.photo} />
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
          );
        }
      });
      return jsx;
    }
  };

  const lazyLoadingDataNull = () => {
    return (
      <>
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
      </>
    );
  };

  function isCheck(obj, key) {
    for (var i of obj) {
      if (!i[key]) return false;
      else {
        return true;
      }
    }
  }
  const dataNull = () => {
    return (
      <div className="data-null">
        <Result icon={<FrownOutlined />} title="Không có dữ liệu !" />
      </div>
    );
  };

  return (
    <Container fluid style={{ backgroundColor: "#F7F7F7", paddingTop: "20px" }}>
      <Container style={{ padding: 0 }}>
        <div>
          <Row className="job__title" style={{ backgroundColor: "white" }}>
            <h5>Danh sách nhà tuyển dụng</h5>
            <hr className="line-theme" />
          </Row>
        </div>
        <div className="home-emplyer">
          {" "}
          {isCheck(data, "id")
            ? renderListEmployer()
            : isCheck(data, "id") == undefined
            ? dataNull()
            : lazyLoadingDataNull()}
        </div>
        {data.length === 0 ? (
          ""
        ) : (
          <Pagination
            style={{ paddingBottom: "15px" }}
            onChange={handleChangePage}
            className="pagination__employer"
            defaultCurrent={1}
            defaultPageSize={9}
            total={total}
            current={current}
          />
        )}
      </Container>
    </Container>
  );
}
