import React, { Component } from "react";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Log from "./IphoneSE-Images/logoSE.png";
import Main from "../MainComponent/MainComponent";
import Learn from "../../LearnBuyComponent/LearnBuyComponent";
import ImageSe from "./IphoneSE-Images/SEImage.jpg";
import Images from "../../ImageComponent/ImageComponent";
import "./IphoneSEComponent.css";

export default class IphoneSEComponent extends Component {
  render() {
    return (
      <div className="IphoneSE-wrapper">
        <div className=" SeAlert-wrapper">
          <p> The new</p>
        </div>

        <span className="IphoneSeImage-wrapper">
          <img src={Log} />
        </span>
        <div className="IphoneSeDescription-Wrapper">
          <Main Description="Love the power. Love the price." />
        </div>

        <Learn className="Learn-wrapper" />
        <Images className="Test-wrapper" Image={ImageSe} />
      </div>
    );
  }
}
