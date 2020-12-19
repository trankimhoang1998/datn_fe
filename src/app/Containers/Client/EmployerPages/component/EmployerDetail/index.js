import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import {
  getDetailEmployerRequest,
  getRecruitmentByEmployerIdRequest,
} from "../../../../../../redux/actionCreators/employerActionCreator";
import "./index.scss";
import {
  PhoneOutlined,
  GlobalOutlined,
  HomeOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
import { Row, Badge, Col, Tag, Button, Pagination, Drawer, Avatar } from "antd";
import "../../../HomePages/component/listNewJob/index.scss";
import { dataNull } from "../../../../../../helper/dataNull";
import {
  applyJobRequest,
  getDetailRecruitmentRequest,
} from "../../../../../../redux/actionCreators/recruitmentActionCreator";
import { checkRole } from "../../../../../../helper/checkRole";
import {
  getCvByIdRequest,
  getCvByUserIdRequest,
} from "../../../../../../redux/actionCreators/cvActionCreator";
import JwtDecode from "jwt-decode";
import { getAccessToken } from "../../../../../../helper/localStorage";
import DetailCv from "../../../CandidateDashbroad/component/ListCv/DetailCv";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import history from "../../../../../../helper/history";

export default function EmployerDetail() {
  const id = useParams().id;

  const [current, setCurrent] = useState(1);

  const dispatch = useDispatch();
  const inforDetailEmployer = useSelector(
    (state) => state.employer.inforDetailEmployer
  );
  const listRecruitmentByEmployerId = useSelector(
    (state) => state.employer.listRecruitmentByEmployerId
  );

  useEffect(() => {
    dispatch(getDetailEmployerRequest(id));
    setCurrent(1);
    dispatch(getRecruitmentByEmployerIdRequest(id, 5, 1));
  }, []);

  const data = inforDetailEmployer.result[0];
  const dataJob = listRecruitmentByEmployerId.result.data;
  const total = listRecruitmentByEmployerId.result.total;
  const [recruitmentid, setRecruitmentid] = useState(1);

  const handleChangePage = (value) => {
    setCurrent(value);
    dispatch(getRecruitmentByEmployerIdRequest(id, 5, value));
  };

  const [visible, setVisible] = useState(false);
  const [visibleChild, setVisibleChild] = useState(false);
  const [visibleChilds, setVisibleChilds] = useState(false);

  const onClose = () => {
    setVisible(false);
  };

  const onCloses = () => {
    setVisibleChild(false);
  };

  const onClosess = () => {
    setVisibleChilds(false);
  };

  const onChildrenDrawerClose = () => {
    setVisibleChild(false);
  };

  const onChildrensDrawerClose = () => {
    setVisibleChilds(false);
  };

  const showChildrensDrawer = (id) => {
    dispatch(getCvByIdRequest(id));
    setVisibleChilds(true);
  };

  const handleApplyCV = (item) => {
    Modal.confirm({
      title: `Thông báo`,
      icon: <ExclamationCircleOutlined />,
      content: `Bạn có muốn apply CV ${item.title}`,
      okText: "Xác Nhận",
      onOk: () => handelApply(item.id),
      cancelText: "Hủy",
    });
  };

  const handelApply = (id) => {
    const data = { cv_id: id, recruitment_id: recruitmentid };
    dispatch(applyJobRequest(data));
  };

  const detailCv = useSelector((state) => state.cv.detailCv);
  const dataUser = useSelector((state) => state.cv.dataUser);
  const dataCV = useSelector((state) => state.cv.dataCV);

  let token = getAccessToken();
  if (token) {
    var idUser = JwtDecode(token).sub;
  }

  const listCvByUserId = useSelector((state) => state.cv.listCvByUserId);

  const showChildrenDrawer = () => {
    dispatch(getCvByUserIdRequest(idUser));
    setVisibleChild(true);
  };

  const handleDeitalRecruitment = (id) => {
    setRecruitmentid(id);
    setVisible(true);
    dispatch(getDetailRecruitmentRequest(id));
  };

  const addCv = () => {
    history.push("/cv");
  };

  const detailRecruitment = useSelector(
    (state) => state.recruitment.detailRecruitment
  );
  const datas = detailRecruitment.result[0];

  const renderListRecruitment = () => {
    let jsx = [];
    if (dataJob.length > 0) {
      jsx = dataJob.map((item, index) => {
        if (item.order) {
          return (
            <Badge.Ribbon
              key={index}
              placement="start"
              text="Tin hot"
              className="custom-notical"
            >
              <Row
                className="list-employers-home"
                //onClick={() => handleDeitalRecruitment(item.id)}
              >
                <Col
                  className="list-employers-home-avatar"
                  xs={4}
                  sm={4}
                  md={5}
                  lg={5}
                  xl={5}
                  span={5}
                >
                  <img src={item.photo} />
                </Col>
                <Col
                  xs={19}
                  sm={19}
                  md={19}
                  lg={15}
                  xl={15}
                  className="list-employers-home-title"
                  span={15}
                >
                  <h5>
                    {item.vacancy}
                  </h5>
                  <Row className="list-employers-home-title-dung">
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} span={12}>
                      <p>Mức lương: {item.salary}</p>
                      <p>Số lượng: {item.quantity}</p>
                      <p>
                        Skill: <Tag color="blue">{item.career}</Tag>
                      </p>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} span={12}>
                      <p>
                        Hạn nộp: <span>{item.end_date}</span>
                      </p>
                      <p>Thành phố: {item.city}</p>
                      <p>Vị trí: {item.rank}</p>
                    </Col>
                  </Row>
                  <Row>
                    <p>Mô tả: {item.description}</p>
                  </Row>
                </Col>
                <Col
                  className="list-employers-home-button"
                  xs={24}
                  sm={24}
                  md={24}
                  lg={4}
                  xl={4}
                  span={4}
                >
                  <Button type="primary">Ứng tuyển</Button>
                  <Button type="primary">Chi tiết</Button>
                </Col>
              </Row>
            </Badge.Ribbon>
          );
        } else {
          return (
            <Row
              key={index}
              className="list-employers-home"
             // onClick={() => handleDeitalRecruitment(item.id)}
            >
              <Col
                className="list-employers-home-avatar"
                xs={4}
                sm={4}
                md={5}
                lg={5}
                xl={5}
                span={5}
              >
                <img src={item.photo} />
              </Col>
              <Col
                xs={19}
                sm={19}
                md={19}
                lg={15}
                xl={15}
                className="list-employers-home-title"
                span={15}
              >
                <h5>
                  {item.vacancy}
                </h5>
                <Row className="list-employers-home-title-dung">
                  <Col xs={12} sm={12} md={12} lg={12} xl={12} span={12}>
                    <p>Mức lương: {item.salary}</p>
                    <p>Số lượng: {item.quantity}</p>
                    <p>
                      Skill: <Tag color="blue">{item.career}</Tag>
                    </p>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12} span={12}>
                    <p>
                      Hạn nộp: <span>{item.end_date}</span>
                    </p>
                    <p>Thành phố: {item.city}</p>
                    <p>Vị trí: {item.rank}</p>
                  </Col>
                </Row>
                <Row>
                  <p>Mô tả: {item.description}</p>
                </Row>
              </Col>
              <Col
                className="list-employers-home-button"
                xs={24}
                sm={24}
                md={24}
                lg={4}
                xl={4}
                span={4}
              >
                <Button
                  type="primary"
                  onClick={() => handleDeitalRecruitment(item.id)}
                >
                  Chi tiết
                </Button>
              </Col>
            </Row>
          );
        }
      });
      return jsx;
    }
  };

  return (
    <>
      <Container>
        <div id="employerID">
          <div className="employerID">
            <div className="employerID-info">
              <h4>{data.company ? data.company : "Đang cập nhật"}</h4>
              <p>
                <PhoneOutlined /> {data.phone ? data.phone : "Đang cập nhật"}
              </p>
              <p>
                <GlobalOutlined /> {data.website ? data.website : "Đang cập nhật"}
              </p>
              <p>
                <HomeOutlined /> {data.address ? data.address : "Đang cập nhật"}
              </p>
              <p>
                <IdcardOutlined /> {data.description ? data.description : "Đang cập nhật"}
              </p>
            </div>
          </div>
          <div className="employerID__cover">
            <img src={data.photo} />
          </div>
          <div className="employerID__avatar">
            <img src={data.avatar} />
          </div>
        </div>
        <div className="recruitment">
          <Row
            className="job__title"
            style={{ backgroundColor: "white", display: "relative" }}
          >
            <h5>Danh sách việc làm</h5>
            <hr className="line-theme" />
          </Row>
          <Drawer
            title="Chi tiết việc làm"
            width={1000}
            closable={true}
            onClose={onClose}
            visible={visible}
            className="drawer-recruitment"
            footer={
              <div
                style={{
                  textAlign: "right",
                }}
              >
                <Button onClick={onClose} style={{ marginRight: 8 }}>
                  Hủy
                </Button>
                {checkRole() === "candidate" ? (
                  <Button type="primary" onClick={showChildrenDrawer}>
                    Ứng tuyển
                  </Button>
                ) : (
                  ""
                )}
              </div>
            }
          >
            <Row className="detail-content">
              <Avatar shape="square" size={100} src={datas.photo} />
              <h5>{datas.vacancy}</h5>
            </Row>
            <Row>
              <Col span={12}>
                <p>Số lượng: {datas.quantity}</p>
                <p>Vị trị: {datas.rank}</p>
                <p>Hình thức: {datas.type_of_work}</p>
              </Col>
              <Col span={12}>
                <p>Mức lương: {datas.salary}</p>
                <p>Hạn nộp: {datas.end_date}</p>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <p>Mô tả: {datas.description}</p>
                <p>Quyền lợi được hưởng: {datas.entitlements}</p>
                <p>Yêu cầu công việc: {datas.job_requirements}</p>
                <p>Yêu cầu hồ sơ: {datas.requested_documents}</p>
                <p>Địa chỉ: {datas.city}</p>
              </Col>
            </Row>
            <div
              className="ant-divider ant-divider-horizontal"
              role="separator"
            ></div>

            <Row className="detail-content">
              <Avatar shape="square" size={100} src={datas.avatar} />
              <h5>{datas.company}</h5>
            </Row>
            <Row>
              <Col span={24}>
                <p>Website: {datas.website}</p>
                <p>Người liên hệ: {datas.contact}</p>
                <p>Địa chỉ công ty: {datas.address}</p>
                <p>Mô tả công ty: {datas.employers_description}</p>
              </Col>
            </Row>

            <Drawer
              title="Chọn CV"
              width={1000}
              closable={false}
              onClose={onChildrenDrawerClose}
              visible={visibleChild}
              className="drawer-recruitment"
              footer={
                <div
                  style={{
                    textAlign: "right",
                  }}
                >
                  <Button onClick={onCloses} style={{ marginRight: 8 }}>
                    Hủy
                  </Button>
                  <Button type="primary" onClick={addCv}>
                    Thêm CV
                  </Button>
                </div>
              }
            >
              {listCvByUserId.result.map((item, key) => {
                return (
                  <Row
                    className="detail-content"
                    key={key}
                    style={{ margin: "10px 20px", alignItems: "center" }}
                  >
                    <Col span={8}>
                      <Avatar shape="square" size={100} src={item.avatar} />
                    </Col>
                    <Col span={8}>
                      <h5>{item.title}</h5>
                    </Col>

                    <Col span={8}>
                      <Button
                        type="info"
                        style={{ display: "inline", marginRight: "5px" }}
                        onClick={() => handleApplyCV(item)}
                      >
                        Chon
                      </Button>
                      <Button
                        type="info"
                        onClick={() => showChildrensDrawer(item.id)}
                      >
                        xem
                      </Button>
                    </Col>
                  </Row>
                );
              })}

              <Drawer
                title="Chi tiết CV"
                width={1000}
                closable={false}
                onClose={onChildrensDrawerClose}
                visible={visibleChilds}
                className="drawer-recruitment"
                footer={
                  <div
                    style={{
                      textAlign: "right",
                    }}
                  >
                    <Button onClick={onClosess} style={{ marginRight: 8 }}>
                      Hủy
                    </Button>
                  </div>
                }
              >
                <DetailCv
                  dataUser={dataUser}
                  detailCv={detailCv}
                  dataCV={dataCV}
                />
              </Drawer>
            </Drawer>
          </Drawer>
          <div>
            {dataJob.length === 0 ? dataNull() : renderListRecruitment()}
          </div>
          {dataJob.length === 0 ? (
            ""
          ) : (
            <Pagination
              onChange={handleChangePage}
              className="pagination__employer"
              defaultCurrent={1}
              defaultPageSize={5}
              total={total}
              current={current}
            />
          )}
        </div>
      </Container>
    </>
  );
}
