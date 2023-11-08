import React from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import { clientId, BACKEND_LOGIN_URL } from "../../utils/tools";
import { history } from "../../index";

export const LogIn = () => {
  
  const onSuccess = (res) => {
    const jsonProfile = JSON.stringify(res.profileObj);
    console.log(jsonProfile);
    // axios({
    // method: 'post',
    // url: BACKEND_LOGIN_URL,
    // data: jsonProfile,
    // })
    history.push("/")
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
                <p className='title'>Hệ thống in tài liệu <br/>Đại Học Bách Khoa - TPHCM</p>
                <a href="#" className="info-btn btn btn-primary">
                  Thông tin chi tiết
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="login-page__right-col">
              <div className="wrapper">
              <div className='title'>
                <p className='title-header'>Xin chào!</p>
                <p className='title-support'>Đăng nhập để bắt đầu</p>
              </div>

              <div id="signInButton" >
                <GoogleLogin
                  clientId={clientId}
                  buttonText="Đăng nhập bằng tài khoản HCMUT"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={"single_host_origin"}
                  isSignedIn={false}
                  className="signInButton"
                  theme="dark"
                ></GoogleLogin>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
