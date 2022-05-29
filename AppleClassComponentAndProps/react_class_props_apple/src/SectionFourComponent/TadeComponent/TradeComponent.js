import React, { Component } from "react";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Main from "../PhoneComponent/MainComponent/MainComponent";
import TradeImage from "./AppleTrad-Image/promo_trade.jpg";
import AppleTrade from "./AppleTrad-Image/promo_trade.jpg";
import "./TradeComponent.css";
export default class TradeComponent extends Component {
  render() {
    return (
      <section className="fourth-heghlight-wrapper">
        <div className="right-side-wrapper ">
          <div className="right-side-container">
            <div className="trade-wrapper white">
              <h3>Now through my 31</h3>
              <h1>Enjoy great Savings </h1>
            </div>

            <div className="links-wrapper white">
              <ul>
                <li>
                  <a href="">Learn more</a>
                </li>
              </ul>
            </div>
            <div className="TradeImage-wrapper">
              <img src={TradeImage} alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
