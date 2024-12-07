import React from "react";

import Welcome from "./Welcome.png";

import Keysis from "./Keysis.png";

import "./indexpage.css";

import { Link } from "react-router-dom";

const IndexPage = () => {
  return (
    <div className="flex">
      <div className="page">
        <div className="page__text__image">
          <div className="page__text">
            <h1 className="page__text__info">Hello!</h1>
            <h2 className="page__text__description">Welcome to bank app</h2>
          </div>

          <div className="background__keysis">
            <img className="keysis__image" src={Keysis} alt="Картинка" />
          </div>

          <img src={Welcome} alt="Картинка" className="background" />
        </div>

        <div className="page__button">
          <Link to="/login">
            <button className="page__button__singup">Sign up</button>
          </Link>
          <Link to="/signin">
            <button className="page__button__singin">Sign in</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
