import {
  GlobalOutlined,
  HomeOutlined,
  PhoneOutlined,
  SendOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import jwtDecode from "jwt-decode";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAccessToken } from "../../../../helper/localStorage";
import { fetchInfoCandidateRequest } from "../../../../redux/actionCreators/candidateActionCreator";
import "./index.scss";

export default function SibarMenu() {
  let token = getAccessToken();
  if (token) {
    var id = jwtDecode(token).sub;
  }

  const infoCandidate = useSelector((state) => state.candidate.infoCandidate);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInfoCandidateRequest(id));
  }, [dispatch]);

  return (
    <div className="submenu">
      <div className="submenu__info">
        <img src={infoCandidate.result[0].avatar} />
        <h5>{infoCandidate.result[0].name}</h5>
        <div>
          <p>
            <span>
              <SendOutlined />
            </span>
            Vị trí: {infoCandidate.result[0].position ? infoCandidate.result[0].position : "Đang cập nhật"} 
          </p>
          <p>
            <span>
              <GlobalOutlined />
            </span>
            Kinh nghiệm: {infoCandidate.result[0].experience ? infoCandidate.result[0].experience : "Đang cập nhật"}
          </p>
          <p>
            <span>
              <PhoneOutlined />
            </span>
            Phone: {infoCandidate.result[0].phone ? infoCandidate.result[0].phone : "Đang cập nhật"}
          </p>
        </div>
      </div>
      <div className="submenu__content">
        <ul>
          <li>
            <HomeOutlined />
            <Link to="/candidate-dashbroad">Quản lý chung</Link>
          </li>
          <li>
            <SolutionOutlined />
            <Link to="/candidate-dashbroad/list-job">Tin Ứng tuyển</Link>
          </li>
          <li>
            <SolutionOutlined />
            <Link to="/candidate-dashbroad/list-cv">Quản lý CV</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
