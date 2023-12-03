import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOut } from "../../redux/reducers/userReducer";


export const SideBar = () => {
  const { userLogin } = useSelector((state) => state.userReducer);
  console.log("userLogin", userLogin);
  return (
    <div className="sideBarwrapper">
      <div
        className="sideBar d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
        style={{ width: 280 }}
      >
        <NavLink
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none" 
        >
          <svg className="bi me-2" width={40} height={32}>
            <use xlinkHref="#bootstrap" />
          </svg>
          <span className="fs-4">Hệ thống In Tài Liệu</span>
        </NavLink>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink to="/home" className="nav-link text-white navbar_custom" aria-current="page">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#home" />
              </svg>
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink to="/printting" className="nav-link text-white navBarcustom">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#speedometer2" />
              </svg>
              In tài liệu
            </NavLink>
          </li>
          <li>
            <NavLink to="/paperManager" className="nav-link text-white">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#table" />
              </svg>
              Quản lý giấy
            </NavLink>
          </li>
          <li>
            <NavLink to="/userProfile" className="nav-link text-white">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#grid" />
              </svg>
              Thông tin tài khoản
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className="nav-link text-white">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#people-circle" />
              </svg>
              Cài đặt
            </NavLink>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <NavLink
            to="/"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={userLogin.imageUrl}
              alt='avatar'
              width={32}
              height={32}
              className="rounded-circle me-2"
            />
            <strong> {userLogin.givenName}</strong>
          </NavLink>
          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <NavLink className="dropdown-item" to="/userSetting">
                Cài đặt
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" to="/userInformation">
                Thông tin cá nhân
              </NavLink>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <NavLink className="dropdown-item" href="#">
                Đăng xuất
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
