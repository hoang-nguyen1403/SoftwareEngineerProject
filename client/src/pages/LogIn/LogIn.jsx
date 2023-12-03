import React, { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { clientId } from "../../utils/tools";
import { gapi } from "gapi-script";
// import env from 'react-dotenv';
import { Header } from "../../components/Header/Header";
import {useDispatch} from "react-redux"
import { logInAPI } from "../../redux/reducers/userReducer";

export const LogIn = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "email",
      });
    }

    gapi.load("client:auth2", start);
  }, []);
  const onSuccess = (res) => {
    const profileObj = res.profileObj;
    const jsonProfile = JSON.stringify(res.profileObj);
    const { email, googleId } = profileObj;
    const userLogin = { email, googleId };
    dispatch(logInAPI(userLogin));

  };
  const onFailure = (res) => {
    console.log("LOGIN FAILED! res ", res);
  };
  return (
    <>
      <Header />
      <div className="login-page">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="login-page__left-col">
                <div className="login-page__left-col__left-contain">
                  <p className="title">
                    Hệ thống in tài liệu <br />
                    Đại Học Bách Khoa - TPHCM
                  </p>
                  <a href="#" className="info-btn btn btn-primary">
                    Thông tin chi tiết
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="login-page__right-col">
                <div className="wrapper">
                  <div className="title">
                    <p className="title-header">Xin chào!</p>
                    <p className="title-support">Đăng nhập để bắt đầu</p>
                  </div>

                  <div id="signInButton">
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
    </>
  );
};
