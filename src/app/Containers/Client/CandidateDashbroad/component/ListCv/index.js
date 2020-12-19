import React, { useEffect, useState } from "react";
import { Row, Col, Button, Modal, Drawer } from "antd";
import "./index.scss";
import { PlusOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import jwtDecode from "jwt-decode";
import { getAccessToken } from "../../../../../../helper/localStorage";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCvRequest,
  getCvByIdRequest,
  getCvByUserIdRequest,
} from "../../../../../../redux/actionCreators/cvActionCreator";
import { Link as RouterLink } from "react-router-dom";
import DetailCv from "./DetailCv";

function ListCv(props) {
  const [visible, setVisible] = useState(false);
  let token = getAccessToken();
  if (token) {
    var id = jwtDecode(token).sub;
  }

  const listCvByUserId = useSelector((state) => state.cv.listCvByUserId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCvByUserIdRequest(id));
  }, [dispatch]);

  function confirm(e) {
    const result = listCvByUserId.result.find((item) => {
      if (e === item.id) {
        return item;
      }
    });

    Modal.confirm({
      title: `Thông báo`,
      icon: <ExclamationCircleOutlined />,
      content: `Bạn có muốn xóa ${result.title}`,
      okText: "Xóa",
      onOk: () => handelDeleteCv(result.id),
      cancelText: "Hủy",
    });
  }

  const handelDeleteCv = (id) => {
    dispatch(deleteCvRequest(id));
  };

  const showDrawer = (value) => {
    dispatch(getCvByIdRequest(value.id));
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const detailCv = useSelector((state) => state.cv.detailCv);
  const dataUser = useSelector((state) => state.cv.dataUser);
  const dataCV = useSelector((state) => state.cv.dataCV);

  //console.log(dataCV);

  const title = detailCv.result[0].title
    ? "Chi tiết CV: " + detailCv.result[0].title
    : "";

  return (
    <>
      <Row className="CV__title">
        <h3>Danh sách CV</h3>
      </Row>
      <Row className="listCV">
        <Drawer
          title={title}
          width={1200}
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
        {listCvByUserId.result.map((item, index) => {
          return (
            <Col key={index} span={8} className="listCV__item">
              <div className="listCV__item-detail">
                <img src={item.avatar} />
                <div className="listCV__item-detail-overlay">
                  <Button
                    type="primary"
                    className="listCV__item-detail-overlay-btn"
                    onClick={() => showDrawer(item)}
                  >
                    Xem CV
                  </Button>
                  <Button
                    type="primary"
                    className="listCV__item-detail-overlay-btn"
                    onClick={() => confirm(item.id)}
                  >
                    Xóa
                  </Button>
                </div>
                <h4>{item.title}</h4>
              </div>
            </Col>
          );
        })}
        <Col span={8} className="listCV__item">
          <div className="listCV__item-detail">
            <RouterLink to="/cv">
              <div className="listCV__item-detail-push">
                <PlusOutlined />
                <h4>Thêm cv mới</h4>
              </div>
            </RouterLink>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default ListCv;
