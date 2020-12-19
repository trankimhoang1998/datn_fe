import {
  Button,
  Col,
  Drawer,
  Form,
  Input,
  Pagination,
  Row,
  Skeleton,
} from "antd";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { useDispatch, useSelector } from "react-redux";
import { dataNull } from "../../../../../../helper/dataNull";
import { getAccessToken } from "../../../../../../helper/localStorage";
import { getCvByIdRequest } from "../../../../../../redux/actionCreators/cvActionCreator";
import { deleteApplyJobRequest } from "../../../../../../redux/actionCreators/employerActionCreator";
import { fetchListCvByUserIdRequest } from "../../../../../../redux/actionCreators/recruitmentActionCreator";
import DetailCv from "../../../CandidateDashbroad/component/ListCv/DetailCv";
import "../ListJobEmployer/index.scss";
import "./index.scss";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";

export default function ListCandidateDB() {
  let token = getAccessToken();
  if (token) {
    var id = jwtDecode(token).sub;
  }

  const dispatch = useDispatch();
  const listCv = useSelector((state) => state.recruitment.listCv);

  useEffect(() => {
    dispatch(fetchListCvByUserIdRequest(id, "", 5, 1));
  }, [dispatch]);

  const [formState, setFormState] = useState({
    name: "",
  });

  const handleChangeName = (event) => {
    const value = event.target.value;
    setFormState((formState) => ({
      ...formState,
      name: value,
    }));
  };

  const onFinish = (values) => {
    setCurrent(1);
    dispatch(fetchListCvByUserIdRequest(id, formState.name, 5, 1));
  };

  const handleChangePage = (value) => {
    setCurrent(value);
    dispatch(fetchListCvByUserIdRequest(id, formState.name, 5, value));
  };
  const [current, setCurrent] = useState(1);

  const data = listCv.result.data;

  const [visible, setVisible] = useState(false);

  const showDrawer = (value) => {
    dispatch(getCvByIdRequest(value.cv_id));
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const detailCv = useSelector((state) => state.cv.detailCv);
  const dataUser = useSelector((state) => state.cv.dataUser);
  const dataCV = useSelector((state) => state.cv.dataCV);

  const title = detailCv.result[0].title
    ? "Chi tiết CV: " + detailCv.result[0].title
    : "";

  const handleDeleteApplyJob = (event) => {
    Modal.confirm({
      title: `Thông báo`,
      icon: <ExclamationCircleOutlined />,
      content: `Bạn có muốn hũy cv ${event.title}`,
      okText: "Xóa",
      onOk: () => handelDelete(event.id),
      cancelText: "Hủy",
    });
  };

  const handelDelete = (id) => {
    setCurrent(1);
    dispatch(deleteApplyJobRequest(id));
  };

  const renderData = () => {
    let jsx = [];
    jsx = data.map((value, key) => {
      return (
        <div key={key} className="listCandidatesDb">
          <Row className="listCandidatesDb__content">
            <Col className="listCandidatesDb__content-avatar" span={5}>
              <img src={value.avatar} />
            </Col>
            <Col className="listCandidatesDb__content-title" span={15}>
              <h5>{value.name}</h5>
              <Row>
                <Col span={12}>
                  <p>SĐT: {value.phone}</p>
                  <p>Địa chỉ: {value.address}</p>
                </Col>
                <Col span={12}>
                  <p>Kinh Nghiệm: {value.experience}</p>
                  <p>Vị trí: {value.position}</p>
                  <p>Tên job: {value.vacancy}</p>
                </Col>
              </Row>
            </Col>
            <Col className="listCandidatesDb__content-button" span={4}>
              <Button type="primary" onClick={() => showDrawer(value)}>
                Xem CV
              </Button>
              <Button
                type="primary"
                onClick={() => handleDeleteApplyJob(value)}
              >
                Huỷ
              </Button>
            </Col>
          </Row>
        </div>
      );
    });
    return jsx;
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

  return (
    <Container>
      <div className="list-employer-db__search">
        <Drawer
          title={title}
          width={1100}
          closable={true}
          onClose={onClose}
          visible={visible}
          className="drawer-cv"
          footer={
            <div
              style={{
                textAlign: "right",
              }}
            >
              <Button onClick={onClose} style={{ marginRight: 8 }}>
                Hủy
              </Button>
              {/* <Button type="primary">Tải xuống</Button> */}
            </div>
          }
        >
          <DetailCv dataUser={dataUser} detailCv={detailCv} dataCV={dataCV} />
        </Drawer>
        <Form
          className="list-employer-db__search-form"
          style={{ height: "32px" }}
          onFinish={onFinish}
        >
          <Form.Item
            name="name"
            className="list-employer-db__search-form-input"
            onChange={handleChangeName}
          >
            <Input placeholder="Tìm kiếm ứng viên" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Tìm kiếm
            </Button>
          </Form.Item>
        </Form>
      </div>
      {isCheck(data, "cv_id")
        ? renderData()
        : isCheck(data, "cv_id") == undefined
        ? dataNull()
        : lazyLoadingDataNull()}
      {data.length === 0 ? (
        ""
      ) : (
        <div className="custom-pgtion">
          <Pagination
            onChange={handleChangePage}
            defaultCurrent={1}
            total={50}
            defaultPageSize={5}
            total={listCv.result.total}
            current={current}
          />
        </div>
      )}
    </Container>
  );
}
