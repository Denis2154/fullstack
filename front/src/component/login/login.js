import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Danger from "./Danger.png";
import Eye from "../../image/Eye.png";
import Eyeoff from "../../image/Eye-off.png";
import "./signup.css";
import ArrowBack from "./arrow-back.png";
import { useAuth } from "../authContext/authContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, login } = useAuth();
  const [showPassword, setShowPassword] = useState(false); 

  const togglePassword = () => {
        setShowPassword(prevState => !prevState);
  };

  const handleLogin = async () => {
    await login(email, password);
  };

  console.log('Email:', email, 'Password:', password);
 

  return (
    <div className="flex">
      <div className="page">
        <div className="icon">
          <Link to="/">
              <img src={ArrowBack} alt="стрелка" />
          </Link>
        </div>

        <div className="block__info">
          <div className="block__text">
            <h1 className="block__text__title">Sign up</h1>
            <h2 className="block__text__description">
              Choose a registration method
            </h2>
          </div>

          <div className="block">
            <form className="form" onSubmit={handleLogin}>
              <div className="block__email__password">
                <div className="label">
                  <label htmlFor="user-email">Email</label>
                </div>

                <div className="input">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="user-email"
                    name="email"
                    placeholder="example@gmai.com"
                    required
                  />
                </div>
              </div>


              <div className="block__email__password">
              <div className="label">
                <label htmlFor="password">Password</label>
              </div>

              <div className="input">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <img onClick={togglePassword} src={showPassword ? Eye : Eyeoff} alt="глаз" />
              </div>
            </div>

            <div className="text__signin__block">
              <span className="text">Already have an account?</span>
              <Link to="/signin">
                <span className="text__signin">Sign In</span>
              </Link>
            </div>

            <div className="button">
              <button onClick={handleLogin} type="submit" className="button__color">
                Continue
              </button>
              {state.error && <p style={{color: 'red'}}>{state.error}</p>}
            </div>

            </form>

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
};

export default Login;
