import React from "react";
import { GoogleLogin } from "react-google-login";
import { useEffect } from "react";
import { gapi } from "gapi-script";
const clientId =
  "1002780695209-kbg98839atoldrmcsbmtaqbj22s2bal2.apps.googleusercontent.com";

export const LogIn = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
  });

  const onSuccess = (res) => {
    console.log("Login success !Current user: ", res.profileObj);
  };
  const onFailure = (res) => {
    console.log("LOGIN FAILED! res ", res);
  };
  return (
    <div className="login-page">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="login-page__left-col">
              <div className="login-page__left-col__left-contain">
                <p className='title'>Hệ thống in tài liệu Đại Học Bách Khoa - TPHCM</p>
                <a href="#" className="info-btn btn btn-primary">
                  Thông tin chi tiết
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="login-page__right-col">
              <div>
                <p>Xin chào!</p>
                <p>Đăng nhập để bắt đầu</p>
              </div>

              <div id="signInButton" className="">
                <GoogleLogin
                  clientId={clientId}
                  buttonText="Đăng nhập bằng tài khoản HCMUT"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={"single_host_origin"}
                  isSignedIn={true}
                ></GoogleLogin>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
