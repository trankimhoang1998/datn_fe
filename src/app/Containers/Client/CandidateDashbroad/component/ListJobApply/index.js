import { ExclamationCircleOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Drawer,
  Form,
  Input,
  Modal,
  Pagination,
  Row,
  Skeleton,
} from "antd";
import Avatar from "antd/lib/avatar/avatar";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataNull } from "../../../../../../helper/dataNull";
import { getAccessToken } from "../../../../../../helper/localStorage";
import {
  deleteApplyJobRequest,
  fetchListRecruitmentApplyRequest,
} from "../../../../../../redux/actionCreators/candidateActionCreator";
import { getDetailRecruitmentRequest } from "../../../../../../redux/actionCreators/recruitmentActionCreator";
import "./index.scss";

function ListJobApply() {
  let token = getAccessToken();
  if (token) {
    var id = jwtDecode(token).sub;
  }
  const dispatch = useDispatch();
  const recruitmentapplybyuserid = useSelector(
    (state) => state.candidate.listRecruitmentApply
  );

  useEffect(() => {
    dispatch(fetchListRecruitmentApplyRequest(id, "", 5, 1));
  }, [dispatch]);

  const [formState, setFormState] = useState({
    vacancy: "",
  });

  const handleChangeVacancy = (event) => {
    const value = event.target.value;
    setFormState((formState) => ({
      ...formState,
      vacancy: value,
    }));
  };

  const onFinish = (values) => {
    setCurrent(1);
    dispatch(fetchListRecruitmentApplyRequest(id, formState.vacancy, 5, 1));
  };

  const handleChangePage = (value) => {
    setCurrent(value);
    dispatch(fetchListRecruitmentApplyRequest(id, formState.vacancy, 5, value));
  };

  const [visible, setVisible] = useState(false);

  const onClose = () => {
    setVisible(false);
  };

  const handleDeitalRecruitment = (id) => {
    setVisible(true);
    dispatch(getDetailRecruitmentRequest(id));
  };

  const detailRecruitment = useSelector(
    (state) => state.recruitment.detailRecruitment
  );
  const datas = detailRecruitment.result[0];

  const [current, setCurrent] = useState(1);

  const data = recruitmentapplybyuserid.result.data;

  const handleDeleteApplyJob = (event) => {
    Modal.confirm({
      title: `Thông báo`,
      icon: <ExclamationCircleOutlined />,
      content: `Bạn có muốn hũy apply job ${event.vacancy}`,
      okText: "Xóa",
      onOk: () => handelDelete(event.ids),
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
        <div key={key}>
          <Row className="list-employers-content">
            <Col className="list-employers-content-avatar" span={5}>
              <img src={value.photo} />
            </Col>
            <Col className="list-employers-content-title" span={15}>
              <h5>{value.vacancy}</h5>
              <Row className="list-employers-content-title-dung">
                <Col span={12}>
                  <p>Số lượng: {value.quantity}</p>
                  <p>Vị trí: {value.career}</p>
                  <p>Địa chỉ: {value.city}</p>
                </Col>
                <Col span={12}>
                  <p>Hạn nộp: {value.end_date}</p>
                  <p>Mức lương: {value.salary}</p>
                  <p>Hình thức: {value.type_of_work}</p>
                </Col>
              </Row>
            </Col>
            <Col className="list-employers-content-button" span={4}>
              <Button
                type="primary"
                onClick={() => handleDeitalRecruitment(value.id)}
              >
                Chi tiết
              </Button>

              <Button
                type="primary"
                onClick={() => handleDeleteApplyJob(value)}
              >
                Hủy ứng tuyển
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
    <div className="list-employer-db">
      <div className="list-employer-db__search">
        <Form
          onFinish={onFinish}
          className="list-employer-db__search-form"
          style={{ height: "32px" }}
        >
          <Form.Item
            name="vacancy"
            className="list-employer-db__search-form-input"
            onChange={handleChangeVacancy}
          >
            <Input placeholder="Tìm kiếm tin tuyển dụng" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Tìm kiếm
            </Button>
          </Form.Item>
        </Form>
        <Drawer
          title="Chi tiết việc làm"
          width={720}
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
            </Col>
          </Row>
        </Drawer>
      </div>
      <div className="list-employers">
        {isCheck(data, "id")
          ? renderData()
          : isCheck(data, "id") == undefined
          ? dataNull()
          : lazyLoadingDataNull()}
        {data.length === 0 ? (
          ""
        ) : (
          <div className="custom-pagination">
            <Pagination
              onChange={handleChangePage}
              defaultCurrent={1}
              total={50}
              defaultPageSize={5}
              total={recruitmentapplybyuserid.result["total"]}
              current={current}
            />
          </div>
        )}
      </div>
    </div>
  );
}
export default ListJobApply;
