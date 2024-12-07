import "./balance.css";

import Bgbalance from "../../image/BG.png";
import SettingImg from "../../image/bell-ringing.png";
import Notifications from "../../image/bell-ringing2.png";
import People from "../../image/people-upload.png";
import ArrowDownRight from "../../image/arrow-down-right.png";
import SSS from "../../image/SSS.png";
import Peopleimg from "../../image/Peopleimg.png";
import Coin from "../../image/Coin.png";

const Balance = () => {
  return (
    <div className="flex">
      <div className="page">
        <div className="page__img">
          <img
            className="page__img__bgbalance"
            src={Bgbalance}
            alt="Bgbalance"
          />

          <div className="main__center">
            <a href="/" className="page__img__setting">
              <img src={SettingImg} alt="Setting" />
            </a>
            <span className="main__center__text">Main wallet</span>
            <a href="/" className="page__img__setting">
              <img src={Notifications} alt="Setting" />
            </a>
          </div>

          <div className="block__balance">
            <div className="main__balance__img">$</div>
            <div className="main__balance__text">100.20</div>
          </div>

          <div className="main__center__circle">
            <div className="circle__bg">
              <div className="circle__img">
                <a href="/">
                  <img
                    className="circle__img__update"
                    src={ArrowDownRight}
                    alt="arrowdownright"
                  />
                </a>
              </div>
              <div className="circle__bg__text">
                <span>Receive</span>
              </div>
            </div>

            <div className="circle__bg">
              <div className="circle__img">
                <a href="/">
                  <img
                    className="circle__img__update"
                    src={People}
                    alt="people"
                  />
                </a>
              </div>
              <div className="circle__bg__text">
                <span className="circle__bg__text">Send</span>
              </div>
            </div>
          </div>
        </div>

        <div className="operations">
          <ul>
            <li>
              <div className="item__operations">
                <div className="item__operations__info">
                  <div>
                    <img src={SSS} alt="SSS" />
                  </div>

                  <div className="title__timedate">
                    <div className="title">
                      <h2>Stripe</h2>
                    </div>

                    <div className="timedate">
                      <p>12:25</p>
                      <p>Receipt</p>
                    </div>
                  </div>
                </div>

                <div className="money">
                  <span>+$125.00</span>
                </div>
              </div>
            </li>
            <li>
            <div className="item__operations">
                <div className="item__operations__info">
                  <div>
                    <img src={Peopleimg} alt="SSS" />
                  </div>

                  <div className="title__timedate">
                    <div className="title">
                      <h2>Oleg V.</h2>
                    </div>

                    <div className="timedate">
                      <p>12:25</p>
                      <p>Sending</p>
                    </div>
                  </div>
                </div>

                <div className="money__send">
                  <span>-$200.50</span>
                </div>
              </div>
            </li>
            <li>
            <div className="item__operations">
                <div className="item__operations__info">
                  <div>
                    <img src={Coin} alt="SSS" />
                  </div>

                  <div className="title__timedate">
                    <div className="title">
                      <h2>Coinbase</h2>
                    </div>

                    <div className="timedate">
                      <p>10:20</p>
                      <p>Receipt</p>
                    </div>
                  </div>
                </div>

                <div className="money">
                  <span>+$1,250.00</span>
                </div>
              </div>
            </li>
            <li>
            <div className="item__operations">
                <div className="item__operations__info">
                  <div>
                    <img src={SSS} alt="SSS" />
                  </div>

                  <div className="title__timedate">
                    <div className="title">
                      <h2>Stripe</h2>
                    </div>

                    <div className="timedate">
                      <p>12:25</p>
                      <p>Receipt</p>
                    </div>
                  </div>
                </div>

                <div className="money">
                  <span>+$125.00</span>
                </div>
              </div>
            </li>
            <li>
            <div className="item__operations">
                <div className="item__operations__info">
                  <div>
                    <img src={Peopleimg} alt="SSS" />
                  </div>

                  <div className="title__timedate">
                    <div className="title">
                      <h2>Diana K.</h2>
                    </div>

                    <div className="timedate">
                      <p>12:25</p>
                      <p>Sending</p>
                    </div>
                  </div>
                </div>

                <div className="money__send">
                  <span>-$125.00</span>
                </div>
              </div>
            </li>
            <li>
            <div className="item__operations">
                <div className="item__operations__info">
                  <div>
                    <img src={SSS} alt="SSS" />
                  </div>

                  <div className="title__timedate">
                    <div className="title">
                      <h2>Stripe</h2>
                    </div>

                    <div className="timedate">
                      <p>12:25</p>
                      <p>Receipt</p>
                    </div>
                  </div>
                </div>

                <div className="money">
                  <span>+$125.00</span>
                </div>
              </div>
            </li>
            <li>
            <div className="item__operations">
                <div className="item__operations__info">
                  <div>
                    <img src={SSS} alt="SSS" />
                  </div>

                  <div className="title__timedate">
                    <div className="title">
                      <h2>Stripe</h2>
                    </div>

                    <div className="timedate">
                      <p>12:20</p>
                      <p>Receipt</p>
                    </div>
                  </div>
                </div>

                <div className="money">
                  <span>+$15.00</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Balance;
