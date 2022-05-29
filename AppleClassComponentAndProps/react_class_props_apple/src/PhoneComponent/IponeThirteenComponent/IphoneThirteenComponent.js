import React, { Component } from "react";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Main from "../MainComponent/MainComponent.js";
import LargeImage from "./Iphone13-Images/IphoneLarge.jpg";
import SmallImage from "./Iphone13-Images/IphoneSmall.jpg";
import Learn from "../../LearnBuyComponent/LearnBuyComponent";
import Images from "../../ImageComponent/ImageComponent";
import "./IphoneThirteenComponent.css";
export default class IphoneThirteenComponent extends Component {
  render() {
    return (
      <div className="IphoneThirteen-wrapper">
        <div className="Tittle-wrapper">
          <Main Title="iphone 13 Pro " />
        </div>
        <div className="Description-wrapper">
          <Main Description="Oh.So.Pro." />
        </div>
        <Learn />
        <Images Image={SmallImage} />
      </div>
    );
  }
}
