import "../recovery-confirm/recoveryConfirm.css";
import ArrowBack from "../login/arrow-back.png";
import {Link} from "react-router-dom";
import Eye from "../login/Eye.png";

const RecoveryConfirm = () => {

return (
    <div className="flex">
      <div className="page">
        <div className="icon">
        <Link to="/">
          <a href="/" ><img src={ArrowBack} alt="стрелка" /></a>
          </Link>
        </div>

        <div className="block__info">
          <div className="block__text">
            <h1 className="block__text__title">Recover Password</h1>
            <h2 className="block__text__description">
            Write the code you received
            </h2>
          </div>

          <div className="block">
            <div className="block__email__password">
              <div className="label">
                <label htmlFor="user-email">Code</label>
              </div>

              <div className="input">
                <input
                  type="email"
                  id="user-email"
                  name="email"
                  placeholder="example@gmai.com"
                  aria-describedby="user-email"
                  aria-invalid="false"
                
                />
              </div>
            </div>

            <div className="block__email__password">
              <div className="label">
                <label htmlFor="password">New password</label>
              </div>

              <div className="input">
                <input
                  type="password"
                  id="password"
                  name="password"
                  aria-describedby="user-password"
                  aria-invalid="false"
                  
                />
                <img src={Eye} alt="глаз" />
              </div>
            </div>

            

            <div className="button">
              <button  className="button__color">Restore password</button>
            </div>

    
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecoveryConfirm;
