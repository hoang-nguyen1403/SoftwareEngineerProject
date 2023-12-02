import React from "react";

export const Header = () => {
  return (
    <div className="header sticky-top">
      <nav className="navigation_bar navbar navbar-expand-sm navbar-light bg-light">
        <div className="container ">
          <div className="logo_wrapper navbar-brand">
            <a className="" href="#">
              <img
                src="https://e-learning.hcmut.edu.vn/pluginfile.php/1/core_admin/logocompact/300x300/1685588876/logoBK.png"
                className="logo mr-1"
                alt="BKEL"
              />
            </a>
            <div className="title-truong">
              <div className="title-faculity" style={{ whiteSpace: "nowrap" }}>
                ĐẠI HỌC QUỐC GIA THÀNH PHỐ HỒ CHÍ MINH
              </div>
              <div className="title-school" style={{ whiteSpace: "nowrap" }}>
                TRƯỜNG ĐẠI HỌC BÁCH KHOA
              </div>
            </div>
          </div>

          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <div class="d-flex me-auto mt-2 ">
            </div>
            <ul className="navbar-nav  my-2 my-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#" aria-current="page">
                  Trang chủ <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#" aria-current="page">
                  Đào tạo <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#" aria-current="page">
                  Đăng nhập<span className="visually-hidden">(current)</span>
                </a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
};
