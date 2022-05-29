import React, { Component } from "react";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Log from "./ApplePride-Images/log.png";
import PrideWatch from "./ApplePride-Images/prideWatch.jpg";
import "./PrideComponent.css";
export default class PrideComponent extends Component {
  render() {
    return (
      <div className="pride-wrapper">
        <div className="trade-wrapper">
          <h3>Treads of</h3>
        </div>
        <div className="pride-logo-wrapper">
          <img src={Log} alt="" />
        </div>
        <div className="links-wrapper">
          <ul>
            <li>
              <a href="">Shope now pride Edition brands</a>
            </li>
          </ul>
        </div>
        <div className="Card-image-wrapper">
          <img src={PrideWatch} alt="" />
        </div>
      </div>
    );
  }
}
