import React, { Component } from "react";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import WatchImage from "./AppleWatch-Images/promo_watch.jpg";
import WatchLog from "./AppleWatch-Images/Watch.png";
import "./WatchComponent.css";
export default class WatchComponent extends Component {
  render() {
    return (
      <section className="fifth-heghlight-wrapper">
        <div className="right-side-wrapper ">
          <div className="right-side-container">
            <div className="top-logo-wrapper">
              <div className="logo-wrapper">
                <img src={WatchLog} />
              </div>
            </div>
            <div className="description-wrapper">
              It's our largest display yet.
            </div>
            <div className="links-wrapper">
              <ul>
                <li>
                  <a href="">Learn more</a>
                </li>
                <li>
                  <a href="">Buy</a>
                </li>
              </ul>
            </div>
            <div className="imageWatch-wrapper">
              <img src={WatchImage} alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
