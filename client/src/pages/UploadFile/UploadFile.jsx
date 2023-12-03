import React from "react";
import { MyUploadButton } from "../../components/UploadComponent/UploadComponent";

export default function UploadFile() {
  return (
    <div className="uploadFile">
      <div className="row">
        <p className="title">Upload tài liệu</p>
      </div>
      <div className="row">
        <div className="wrapper col">
          <div>
            <ul className="nav nav-tabs nav-fill mb-3" id="ex1" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  id="ex2-tab-1"
                  data-bs-toggle="tab"
                  href="#ex2-tabs-1"
                  role="tab"
                  aria-controls="ex2-tabs-1"
                  aria-selected="true"
                >
                  Upload file
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="ex2-tab-2"
                  data-bs-toggle="tab"
                  href="#ex2-tabs-2"
                  role="tab"
                  aria-controls="ex2-tabs-2"
                  aria-selected="false"
                >
                  File trên hệ thống
                </a>
              </li>
            </ul>
            <div className="tab-content row" id="ex2-content">
              <div
                className="tab-pane fade show active"
                id="ex2-tabs-1"
                role="tabpanel"
                aria-labelledby="ex2-tab-1"
              >
                <div className="row">
                  <div className="col">
                    <div className="mb-3">
                      <label htmlFor className="form-label">
                        Tên tài liệu
                      </label>
                      <input
                        type="text"
                        name
                        id
                        className="form-control"
                        placeholder
                        aria-describedby="helpId"
                      />
                      <small id="helpId" className="text-muted">
                        Tên tài liệu
                      </small>
                    </div>
                    <div className="mb-3">
                      <label htmlFor className="form-label">
                        Chọn file
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        name
                        id
                        placeholder
                        aria-describedby="fileHelpId"
                      />
                      {/* <MyUploadButton className="form-control"/> */}
                      <div id="fileHelpId" className="form-text">
                        Tài liệu
                      </div>
                    </div>

                    <button type="submit" class="btn btn-primary">
                      Tải File Lên
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade p-5"
                id="ex2-tabs-2"
                role="tabpanel"
                aria-labelledby="ex2-tab-2"
              >
                <div className="d-flex justify-content-center">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tìm kiếm "
                  />
                  <button className="btn btn-primary">Tìm</button>
                </div>

                <div class="table-responsive mt-3">
                  <table class="table table-primary">
                    <thead>
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col w-100">Tên Tài liệu</th>
                        <th scope="col"> Định dạng</th>
                        <th scope="col">Số trang</th>
                        <th scope="col">Ngày tải lên</th>
                        <th scope="col">Tuỳ chọn</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="">
                        <td scope="row">1</td>
                        <td>Tài liêu thi cuối kỳ năm 2023</td>
                        <td>.png</td>
                        <td>20</td>
                        <td>20-10-2023</td>
                        <td>
                          <div className="d-flex">
                            <div>
                              <button type="button" className="btn btn-primary">
                                Chỉnh sửa
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger m-1"
                              >
                                Xoá
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td scope="row">2</td>
                        <td>Tài liêu thi học tập</td>
                        <td>.pdf</td>
                        <td>20</td>
                        <td>30-10-2023</td>
                        <td>
                          <div className="d-flex">
                            <div>
                              <button type="button" className="btn btn-primary">
                                Chỉnh sửa
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger m-1"
                              >
                                Xoá
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td scope="row">3</td>
                        <td>Tài liêu thi học tập</td>
                        <td>.pdf</td>
                        <td>20</td>
                        <td>30-10-2023</td>
                        <td>
                          <div className="d-flex">
                            <div>
                              <button type="button" className="btn btn-primary">
                                Chỉnh sửa
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger m-1"
                              >
                                Xoá
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td scope="row">4</td>
                        <td>Tài liêu thi học tập</td>
                        <td>.pdf</td>
                        <td>20</td>
                        <td>30-10-2023</td>
                        <td>
                          <div className="d-flex">
                            <div>
                              <button type="button" className="btn btn-primary">
                                Chỉnh sửa
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger m-1"
                              >
                                Xoá
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td scope="row">5</td>
                        <td>Tài liêu thi học tập</td>
                        <td>.pdf</td>
                        <td>20</td>
                        <td>30-10-2023</td>
                        <td>
                          <div className="d-flex">
                            <div>
                              <button type="button" className="btn btn-primary">
                                Chỉnh sửa
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger m-1"
                              >
                                Xoá
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td scope="row">6</td>
                        <td>Tài liêu thi học tập</td>
                        <td>.pdf</td>
                        <td>20</td>
                        <td>30-10-2023</td>
                        <td>
                          <div className="d-flex">
                            <div>
                              <button type="button" className="btn btn-primary">
                                Chỉnh sửa
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger m-1"
                              >
                                Xoá
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td scope="row">7</td>
                        <td>Tài liêu thi học tập</td>
                        <td>.pdf</td>
                        <td>20</td>
                        <td>30-10-2023</td>
                        <td>
                          <div className="d-flex">
                            <div>
                              <button type="button" className="btn btn-primary">
                                Chỉnh sửa
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger m-1"
                              >
                                Xoá
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td scope="row">8</td>
                        <td>Tài liêu thi học tập</td>
                        <td>.pdf</td>
                        <td>20</td>
                        <td>30-10-2023</td>
                        <td>
                          <div className="d-flex">
                            <div>
                              <button type="button" className="btn btn-primary">
                                Chỉnh sửa
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger m-1"
                              >
                                Xoá
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td scope="row">9</td>
                        <td>Tài liêu thi học tập</td>
                        <td>.pdf</td>
                        <td>20</td>
                        <td>30-10-2023</td>
                        <td>
                          <div className="d-flex">
                            <div>
                              <button type="button" className="btn btn-primary">
                                Chỉnh sửa
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger m-1"
                              >
                                Xoá
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <nav aria-label="Page navigation">
                  <ul className="pagination    ">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                      </a>
                    </li>
                    <li className="page-item active" aria-current="page">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">»</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
