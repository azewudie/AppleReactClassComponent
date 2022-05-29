import React, { Component } from "react";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./PrivacyComponent.css";
export default class PrivacyComponent extends Component {
  render() {
    return (
      <section className="fifth-heghlight-wrapper">
        <div className="left-side-wrapper ">
          <div className="left-side-container">
            <div className="top-logo-wrapper">
              <div className="title-wrapper Privacy-wrapper">
                <p> Privacy. That's Iphone</p>
              </div>
            </div>

            <div className="learn-more-privacy-wrapper">
              <a href="#">Learn more</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
