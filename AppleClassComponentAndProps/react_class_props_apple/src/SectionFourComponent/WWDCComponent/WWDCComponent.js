import React, { Component } from "react";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Logo from "./wwdc2022-images/wwdc22_logo_large_2x.png";
import Main from "../../PhoneComponent/MainComponent/MainComponent";
import WWDCCImage from "./wwdc2022-images/wwdc22_logo_large_2x.png";
import "./WWDCComponent.css";

export default class WWDCComponent extends Component {
  render() {
    return (
      <section className="fourth-heghlight-wrapper">
        <div className="left-side-wrapper ">
          <div className="left-side-container">
            <div className="title-wrapper">
              <img src={WWDCCImage} alt="" />
            </div>
            <div className="description-wrapper">
              The Worldwide Developers Conference is coming.Join us online June
              6-10
            </div>
            <div className="links-wrapper">
              <ul>
                <li>
                  <a href="">Learn more</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
