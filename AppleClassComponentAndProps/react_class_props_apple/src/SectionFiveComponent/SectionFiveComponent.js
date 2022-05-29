import React, { Component } from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import IphonePrivacy from "./PrivacyComponent/PrivacyComponent";
import AppleWatch from "./WatchComponent/WatchComponent";
import "./SectionFiveComponent.css";
export default class SectionFiveComponent extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="left-side-wrapper  col-sm-12 col-md-6">
            <IphonePrivacy />
          </div>

          <div className=" right-side-wrapper >col-sm-12 col-md-6">
            <AppleWatch />
          </div>
        </div>
      </div>
    );
  }
}
