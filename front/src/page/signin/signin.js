import React from "react";

import Back from "../../image/arrow-back.png";

import Eye from "../../image/Eye.png";

import "./signin.css";

import { Link } from "react-router-dom";


const SignIn = () => {
  return (
    <div className="flex">
      <div className="page">
        
        <div className="icon">
          <a href="/"><img src={Back} alt="стрелка" /></a>
        </div>

        <div className="block__info">
          <div className="block__text">
            <h1 className="block__text__title">Sign in</h1>
            <h2 className="block__text__description">
            Select login method
            </h2>
          </div>

          <div className="block">
            <div className="block__email__password">
              <div className="label__email">
                <label>Email</label>
              </div>

              <div className="input__email">
                <input
                  type="text"
                  id="username"
                  placeholder="example@gmai.com"
                />
              </div>
            </div>

            <div className="block__email__password">

              <div className="label__password">
                <label>Password</label>
              </div>

              <div className="input__password">
                <input 
                  type="password"
                  id="username"
                  placeholder="Pass2000ID"
                />
               
               <div className="imgpassword active">
                <img src={Eye} alt="глаз" />
              </div>
                

              </div>

              <div className="label__password">
                <span>Sorry, the password is too simple</span>
              </div>
            </div>

            <div className="text__signin__block">
              <span className="text">Forgot your password?</span>
              <Link href="/"><span className="text__signin">Restore</span></Link>
            </div>

            <div className="button">
              <button className="button__color">Continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;


