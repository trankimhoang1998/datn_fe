import { Link } from "react-router-dom";
import "./index.scss";
import {
  SendOutlined,
  GlobalOutlined,
  PhoneOutlined,
  SolutionOutlined,
  HomeOutlined,
  UserOutlined,
  FormOutlined,
} from "@ant-design/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import { getAccessToken } from "../../../../helper/localStorage";
import { fetchInfoEmployerRequest } from "../../../../redux/actionCreators/employerActionCreator";

export default function SibarMenu() {
  let token = getAccessToken();
  if (token) {
    var id = jwtDecode(token).sub;
  }

  const infoEmployer = useSelector((state) => state.employer.infoEmployer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInfoEmployerRequest(id));
  }, [dispatch]);

  return (
    <div className="submenu">
      <div className="submenu__info">
        <img src={infoEmployer.result[0].avatar} />
        <h5>{infoEmployer.result[0].company}</h5>
        <div>
          <p>
            <span>
              <SendOutlined />
            </span>
            Địa chỉ: {infoEmployer.result[0].address ? infoEmployer.result[0].address : "Đang cập nhật"}
          </p>
          <p>
            <span>
              <GlobalOutlined />
            </span>
            Website: {infoEmployer.result[0].website ? infoEmployer.result[0].website : "Đang cập nhật"}
          </p>
          <p>
            <span>
              <PhoneOutlined />
            </span>
            Số điện thoại: {infoEmployer.result[0].phone ? infoEmployer.result[0].phone : "Đang cập nhật"}
          </p>
        </div>
      </div>
      <div className="submenu__content">
        <ul>
          <li>
            <HomeOutlined />
            <Link to="/employer-dashbroad">Quản lý chung</Link>
          </li>
          <li>
            <SolutionOutlined />
            <Link to="/employer-dashbroad/list-job">Tin tuyển dụng</Link>
          </li>
          <li>
            <FormOutlined />
            <Link to="/employer-dashbroad/add-recruitment">
              Đăng tin tuyển dụng
            </Link>
          </li>
          <li>
            <UserOutlined />
            <Link to="/employer-dashbroad/list-candidate">
              Danh sách ứng viên
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
