import React, { Component } from "react";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./MainComponent.css";
export default class MainComponent extends Component {
  render() {
    return (
      <div className="container-wrapper">
        <div className="title-wrapper ">{this.props.Title}</div>
        <div className="description-wrapper">{this.props.Description}</div>
      </div>
    );
  }
}
