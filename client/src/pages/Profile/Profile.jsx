import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Profile() {
  const { userLogin } = useSelector((state) => state.userReducer);
  console.log(userLogin);

  return (
    <div className="profile">
      <div className="row">
        <p className="title">Thông tin sinh viên</p>
      </div>
      <div className="row ">
        <div className="col m-2">
          <div classname="userInfoWrapper">
            <div className="itemF">
              <label htmlFor className="form-label">
                ID
              </label>
              <input
                type="text"
                name
                id
                className="form-control"
                placeholder
                aria-describedby="helpId"
                value={`${userLogin.user_id}`}
                disabled
              />
            </div>
            <div className="itemF">
              <label htmlFor className="form-label">
                Name
              </label>
              <input
                type="text"
                name
                id
                className="form-control"
                placeholder
                aria-describedby="helpId"
                disabled
                value={`${userLogin.familyName} ${userLogin.givenName}`}
              />
            </div>
            <div className="itemF">
              <label htmlFor className="form-label">
                Email
              </label>
              <input
                type="text"
                name
                id
                className="form-control"
                placeholder
                aria-describedby="helpId"
                disabled
                value={`${userLogin.email}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
