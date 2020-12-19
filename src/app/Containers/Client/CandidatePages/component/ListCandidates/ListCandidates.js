import { FrownOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Col,
  Drawer,
  Pagination,
  Result,
  Row,
  Skeleton,
} from "antd";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchListCandidateRequest,
  getDetailCandidateRequest,
} from "../../../../../../redux/actionCreators/candidateActionCreator";
import "./ListCandidates.scss";

export default function ListCandidates(props) {
  const { formState, current, handleCurrent } = props;
  const dispatch = useDispatch();
  const candidate = useSelector((state) => state.candidate.listCandidate);

  useEffect(() => {
    dispatch(fetchListCandidateRequest(formState.name,formState.position, 9, 1));
  }, [formState]);

  const handleChangePage = (value) => {
    handleCurrent(value);
    dispatch(fetchListCandidateRequest(formState.name,formState.position, 9, value));
    window.scrollTo({
      top: 200,
      behavior: "smooth",
    });
  };
  function isCheck(obj, key) {
    for (var i of obj) {
      if (!i[key]) return false;
      else {
        return true;
      }
    }
  }
  const data = candidate.result["data"];
  const total = candidate.result["total"];

  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
  };

  const detailCandidate = useSelector(
    (state) => state.candidate.detailCandidate
  );

  const handleDeitalCandidate = (id) => {
    setVisible(true);
    dispatch(getDetailCandidateRequest(id));
  };

  const datas = detailCandidate.result[0];

  const renderListCandidate = () => {
    let jxs = [];
    jxs = data.map((item, key) => {
      return (
        <div
          key={key}
          className="candidates__content-detail"
          onClick={() => handleDeitalCandidate(item.id)}
        >
          <Avatar size={150} src={item.avatar} />
          <h6>{item.name}</h6>
          <Row className="candidates__content-detail-dec">
            <p>Số điện thoại: {item.phone}</p>
            <p>Kinh nghiệm: {item.experience}</p>
            <p>Vị trị: {item.position}</p>

            <p>{item.address}</p>
          </Row>
        </div>
      );
    });
    return jxs;
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
  const dataNull = () => {
    return (
      <div className="data-null">
        <Result icon={<FrownOutlined />} title="Không có dữ liệu !" />
      </div>
    );
  };

  return (
    <Container fluid style={{ backgroundColor: "#F7F7F7" }}>
      <Container className="candidates">
        <Row className="candidates__title" style={{ backgroundColor: "white" }}>
          <h5>Danh sách ứng viên</h5>
          <hr className="line-theme" />
        </Row>
        <Drawer
          title="Chi tiết ứng viên"
          width={700}
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
            <Avatar shape="square" size={100} src={datas.avatar} />
            <h5>{datas.name}</h5>
          </Row>
          <Row>
            <Col span={12} style={{ marginTop: "10px" }}>
              <p>Số điện thoại: {datas.phone ? datas.phone : "Đang cập nhật"}</p>
              <p>Vị trị: {datas.position ? datas.position : "Đang cập nhật"}</p>
              <p>Địa chỉ: {datas.address ? datas.address : "Đang cập nhật"}</p>
            </Col>
            <Col span={12} style={{ marginTop: "10px" }}>
              <p>Kinh nghiệm: {datas.experience ? datas.experience : "Đang cập nhật"}</p>
              <p>Ngày sinh: {datas.birthday ? datas.birthday : "Đang cập nhật"}</p>
              <p>Email: {datas.email ? datas.email : "Đang cập nhật"}</p>
            </Col>
          </Row>

          <div
            className="ant-divider ant-divider-horizontal"
            role="separator"
          ></div>
        </Drawer>
        <Row className="candidates__content">
          {isCheck(data, "id")
            ? renderListCandidate()
            : isCheck(data, "id") == undefined
            ? dataNull()
            : lazyLoadingDataNull()}
        </Row>
        {data.length === 0 ? (
          ""
        ) : (
          <Pagination
            onChange={handleChangePage}
            className="pagination__candidates"
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
