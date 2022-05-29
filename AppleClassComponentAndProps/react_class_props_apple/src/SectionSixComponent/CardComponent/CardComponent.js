import React, { Component } from "react";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Log from "./AppleCard-Images/logo.png";
import CardImage from "./AppleCard-Images/card.jpg";
import "./CardComponent.css";
export default class CardComponent extends Component {
  render() {
    return (
      <div className="Card-wrapper">
        <div className="card-logo-wrapper">
          <img src={Log} alt="" />
        </div>
        <div className="desc-wrapper">
          Get Up to 3% Daily Cash back with every purchase.
        </div>
        <div className="links-wrapper">
          <ul>
            <li>
              <a href="">Learn more</a>
            </li>
            <li>
              <a href="">Apple now</a>
            </li>
          </ul>
        </div>
        <div className="Card-image-wrapper">
          <img src={CardImage} alt="" />
        </div>
      </div>
    );
  }
}
