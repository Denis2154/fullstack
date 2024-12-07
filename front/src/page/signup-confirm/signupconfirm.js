import React from "react";

import Back from "../../component/login/arrow-back.png";

import "./signupconfirm.css";

const SignUpConfirm = () => {
  return (
    <div className="flex">
      <div className="page">
        <div className="icon">
          <img src={Back} alt="стрелка" />
        </div>

        <div className="block__info">
          <div className="block__text">
            <h1 className="block__text__title">Confirm account</h1>
            <h2 className="block__text__description">
            Write the code you received
            </h2>
          </div>

          <div className="block">
            <div className="block__email__password">
              <div className="label">
                <label>Code</label>
              </div>

              <div className="input">
                <input
                  type="text"
                  id="username"
                  placeholder="123456"
                />
              </div>
            </div>
          </div>

          <div className="button">
            <button className="button__color">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpConfirm;