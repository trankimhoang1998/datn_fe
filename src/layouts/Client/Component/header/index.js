import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../../../../asset/logo.png";
import { checkRole } from "../../../../helper/checkRole";
import history from "../../../../helper/history";
import { clearUserData, getUserDatas } from "../../../../helper/localStorage";
import { getUserData } from "../../../../redux/actionCreators/loginActionCreators";
import "./index.scss";

function Header(props) {
  const dispatch = useDispatch();
  function isEmpty(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }
    return true;
  }
  const dataUser = useSelector((state) => state.login.userData);
  if (isEmpty(dataUser)) {
    dispatch(getUserData(getUserDatas()));
  }
  const handleLogout = () => {
    history.push("/login");
    clearUserData();
    dispatch(getUserData(getUserDatas()));
  };
  function confirm() {
    Modal.confirm({
      className: "modal__confirm-custom",
      title: "Bạn có muốn đăng xuất không",
      icon: <ExclamationCircleOutlined />,
      okText: "Đăng xuất",
      cancelText: "Huỷ",
      onOk: handleLogout,
    });
  }

  const ActiveUser = (props) => {
    const { isCheckUser } = props;
    return (
      <>
        <NavDropdown
          title={dataUser.name ? dataUser.name : ""}
          className="dropdow__custom"
          id="collasible-nav-dropdown"
        >
          <RouterLink
            className="dropdown-item"
            to={
              isCheckUser === "employer"
                ? "/employer-dashbroad"
                : isCheckUser === "admin"
                ? "/admin-dashboard"
                : "/candidate-dashbroad"
            }
          >
            Quản lý thông tin
          </RouterLink>
          {/* {isCheckUser === "candidate" ? (
            <RouterLink className="dropdown-item" to="/cv">
              Tạo nhanh CV
            </RouterLink>
          ) : (
            ""
          )} */}
          <a className="dropdown-item" onClick={confirm}>
            Đăng xuất
          </a>
        </NavDropdown>
      </>
    );
  };
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" className="header">
      <Container>
        <Navbar.Brand href="">
          <RouterLink to="/">
            <img src={Logo} />
          </RouterLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="header__content">
          <Nav className="mr-auto">
            <RouterLink className="nav-link" to="/">
              Trang chủ
            </RouterLink>
            {/* <RouterLink className="nav-link" to="/news">
              Tin tức
            </RouterLink> */}
            <RouterLink className="nav-link" to="/recruitments">
              Việc làm
            </RouterLink>
            <RouterLink className="nav-link" to="/employer">
              Nhà tuyển dụng
            </RouterLink>
            <RouterLink className="nav-link" to="/candidate">
              Ứng viên
            </RouterLink>
          </Nav>
          <Nav>
            {dataUser ? (
              <ActiveUser isCheckUser={checkRole()} />
            ) : (
              <>
                <RouterLink className="nav-link" to="/signup">
                  Đăng ký
                </RouterLink>
                <RouterLink className="nav-link" to="/login">
                  Đăng nhập
                </RouterLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
