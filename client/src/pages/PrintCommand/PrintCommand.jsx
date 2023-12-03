import React from "react";

export default function PrintCommand() {
  return (
    <div className="printCommand">
      <div className="row">
        <p className="title">Tạo lệnh In</p>
      </div>
      <form className="submitPrinting">
        <fieldset >
          <legend>Tạo lệnh in</legend>
          <div className="mb-3">
            <label htmlFor="number" className="form-label">Số lượng</label>
            <input type="text" id="number" className="form-control" placeholder="Số lượng bản sao" />
            </div>

          <div className="mb-3">
            <label htmlFor="disabledSelect" className="form-label">
              Chọn tài liệu in
            </label>
            <select id="disabledSelect" className="form-select">
              <option>Tài liệu ôn thi 2023</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="side" className="form-label">
              Chiều in
            </label>
            <select id="side" className="form-select">
              <option>Dọc </option>
              <option>Ngang </option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="printer" className="form-label">
              Máy in
            </label>
            <select id="printer" className="form-select">
              <option>HP Larser 1 </option>
              <option>HP Larser 2 </option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="printer" className="form-label">
              Toà Nhà
            </label>
            <select id="printer" className="form-select">
              <option>B4 </option>
              <option>C2 </option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="printer" className="form-label">
              Tầng
            </label>
            <select id="printer" className="form-select">
              <option>2 </option>
              <option>4 </option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="number" className="form-label">Tổng số trang: </label>
            <input type="text" id="number" className="form-control" value="100" disabled/>
            </div>
          <button type="submit" className="btn btn-primary">
            Gửi lệnh in
          </button>
        </fieldset>
      </form>
    </div>
  );
}
