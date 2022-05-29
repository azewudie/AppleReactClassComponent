import React, { Component } from "react";
import "./ImageComponent.css";
export default class ImageComponent extends Component {
  render() {
    return (
      <div className="image-wrapper">
        <img src={this.props.Image} alt="" />
      </div>
    );
  }
}
