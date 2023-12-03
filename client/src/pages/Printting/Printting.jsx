import React from "react";
import { NavLink } from "react-router-dom";

export default function Printting() {
  return (
    <div className="printting">
      <div className="row">
        <div className="tilte">In tài liệu</div>
      </div>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-6">
          <div className="printting_item_wrapper">
            <div className="printting_item">
              <div className="left_item">
                <i class="fa-solid fa-upload"></i>
              </div>
              <div className="right_item">
                <h4 className="title">
                  <NavLink to="/uploadfile"> Upload tài liệu </NavLink>
                </h4>
                <p className="title-text">Tải tiệu in tới hệ thống.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5"></div>
        

      </div>
      <div className="row">
      <div className="col-1"></div>
        <div className="col-6">
          <div className="printting_item_wrapper">
            <div className="printting_item">
              <div className="left_item">
              <i class="fa-solid fa-print"></i>
              </div>
              <div className="right_item">
                <h4 className="title">
                  <NavLink to="/printfile"> In tài liệu </NavLink>
                </h4>
                <p className="title-text">Tạo lệnh in tài liệu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
