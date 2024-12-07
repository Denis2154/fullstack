import React from "react";

import Back from "../../component/login/arrow-back.png";

import Eye from "../../component/login/Eye.png";

import Danger from "../../component/login/Danger.png";

import "../../component/login/signup.css";

const SignUp = () => {
  return (
    <div className="flex">
      <div className="page">
        <div className="icon">
          <img src={Back} alt="стрелка" />
        </div>

        <div className="block__info">
          <div className="block__text">
            <h1 className="block__text__title">Sign up</h1>
            <h2 className="block__text__description">
              Choose a registration method
            </h2>
          </div>

          <div className="block">
            <div className="block__email__password">
              <div className="label">
                <label>Email</label>
              </div>

              <div className="input">
                <input
                  type="text"
                  id="username"
                  placeholder="example@gmai.com"
                />
              </div>
            </div>

            <div className="block__email__password">
              <div className="label">
                <label>Password</label>
              </div>

              <div className="input">
                <input
                  type="textPassword"
                  id="username"
                  placeholder="Pass2000ID"
                />
                <img src={Eye} alt="глаз" />
              </div>
            </div>

            <div className="text__signin__block">
              <span className="text">Already have an account?</span>
              <a href="/signin"><span className="text__signin">Sign In</span></a>
            </div> 
          

            <div className="button">
              <button className="button__color">Continue</button>
            </div>

            <div className="block__danger">
              <span className="danger__image">
                <img src={Danger} alt="Danger" />
              </span>
              <span className="danger__text">
                A user with the same name is already exist
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp; 
