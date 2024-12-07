import "../recovery/recovery.css"
import { Link } from "react-router-dom";
import ArrowBack from "../../component/login/arrow-back.png"

const Recovery = () => {

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
              Choose a recovery method
            </h2>
          </div>

          <div className="block">
            <div className="block__email__password">
              <div className="label">
                <label htmlFor="user-email">Email</label>
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


            <div className="button">
              <button className="button__color">Send Code</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
