import React, { Component } from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Log from "./Unicef-Images/unicef_logo.png";
import "./UnicefComponent.css";
export default class UnicefComponent extends Component {
  render() {
    return (
      <div className="Unicef-wrapper">
        <img src={Log} alt="" />
        <span className="Unicef-icon-wrapper">
          <a href="#">
            Donate to support families affected by the war in Ukraine
          </a>
        </span>
      </div>
    );
  }
}
