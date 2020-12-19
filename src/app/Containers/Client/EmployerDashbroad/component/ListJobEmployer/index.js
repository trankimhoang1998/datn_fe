import {
  Button,
  Col,
  Form,
  Input,
  Pagination,
  Row,
  Select,
  Skeleton,
} from "antd";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccessToken } from "../../../../../../helper/localStorage";
import {
  fetchListRecruitmentByUserIdRequest,
  getInfoEditRecruitmentRequest,
} from "../../../../../../redux/actionCreators/recruitmentActionCreator";
import "./index.scss";
import styled from "styled-components";
import history from "../../../../../../helper/history";
import { deleteRecruitmentRequest } from "../../../../../../redux/actionCreators/employerActionCreator";
import { dataNull } from "../../../../../../helper/dataNull";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

function ListJobEmployer() {
  const { Option } = Select;

  let token = getAccessToken();
  if (token) {
    var id = jwtDecode(token).sub;
  }

  const dispatch = useDispatch();
  const recruitmentbyuserid = useSelector(
    (state) => state.recruitment.listRecruitmentByUserId
  );

  useEffect(() => {
    dispatch(fetchListRecruitmentByUserIdRequest(id, "", "", 5, 1));
  }, [dispatch]);

  const [formState, setFormState] = useState({
    vacancy: "",
    active: "",
  });

  const handleChangeVacancy = (event) => {
    const value = event.target.value;
    setFormState((formState) => ({
      ...formState,
      vacancy: value,
    }));
  };

  const handleChangeActive = (event) => {
    setFormState((formState) => ({
      ...formState,
      active: event,
    }));
  };

  const onFinish = (values) => {
    setCurrent(1);
    dispatch(
      fetchListRecruitmentByUserIdRequest(
        id,
        formState.vacancy,
        formState.active,
        5,
        1
      )
    );
  };

  const handleChangePage = (value) => {
    setCurrent(value);
    dispatch(
      fetchListRecruitmentByUserIdRequest(
        id,
        formState.vacancy,
        formState.active,
        5,
        value
      )
    );
  };

  const [current, setCurrent] = useState(1);

  const handleEditRecruitment = (event) => {
    dispatch(getInfoEditRecruitmentRequest(event));
    history.push(`/employer-dashbroad/list-job/edit/${event}`);
  };

  const handleDeleteRecruitment = (event) => {
    Modal.confirm({
      title: `Thông báo`,
      icon: <ExclamationCircleOutlined />,
      content: `Bạn có muốn xóa ${event.vacancy}`,
      okText: "Xóa",
      onOk: () => handelDelete(event.id),
      cancelText: "Hủy",
    });
  };

  const handelDelete = (id) => {
    setCurrent(1);
    dispatch(deleteRecruitmentRequest(id));
  };

  const data = recruitmentbyuserid.result["data"];
  const renderData = () => {
    let jsx = [];
    jsx = data.map((value, key) => {
      return (
        <div key={key}>
          <DivSucces data={value.active}>
            <Row className="list-employers-content">
              <Col className="list-employers-content-avatar" span={5}>
                <img src={value.photo} />
              </Col>
              <Col className="list-employers-content-title" span={15}>
                <h5>{value.vacancy}</h5>
                <Row className="list-employers-content-title-dung">
                  <Col span={12}>
                    <p>Mức lương: {value.salary}</p>
                    <p>Số lượng: {value.quantity}</p>
                  </Col>
                  <Col span={12}>
                    <p>
                      <TextSucces data={value.active}>
                        {value.active === 1 ? " Đã duyệt" : " Chưa duyệt"}
                      </TextSucces>
                    </p>
                    <p>Thành phố: {value.city}</p>
                  </Col>
                </Row>
              </Col>
              <Col className="list-employers-content-button" span={4}>
                <Button
                  type="primary"
                  onClick={() => handleEditRecruitment(value.id)}
                >
                  Chỉnh sửa
                </Button>

                <Button
                  type="primary"
                  onClick={() => handleDeleteRecruitment(value)}
                >
                  Xoá
                </Button>
              </Col>
            </Row>
          </DivSucces>
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
            <Select onChange={handleChangeActive} defaultValue="">
              <Option value="">Tất cả tin tuyển dụng</Option>
              <Option value="1">Tin đã duyệt</Option>
              <Option value="0">Tin chưa duyệt</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Tìm kiếm
            </Button>
          </Form.Item>
        </Form>
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
              total={recruitmentbyuserid.result["total"]}
              current={current}
            />
          </div>
        )}
      </div>
    </div>
  );
}
export default ListJobEmployer;

const bgColorChooser = ({ data }) => {
  if (data === 1) return "#D4EDDA";
  else if (data === 0) return "#f8d7db";
  return;
};
const textColorChooser = ({ data }) => {
  if (data === 1) return "#21c447";
  else if (data === 0) return "#dd4040";
};
const DivSucces = styled.section`
  background-color: ${bgColorChooser};
  width: 100%;
  border-radius: 10px;
`;
const TextSucces = styled.span`
  color: ${textColorChooser};
`;
