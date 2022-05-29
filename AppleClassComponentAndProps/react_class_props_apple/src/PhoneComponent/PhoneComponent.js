import React, { Component } from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import IphoneSE from "./IponeSEComponent/IphoneSEComponent";
import IphoneThirteen from "./IponeThirteenComponent/IphoneThirteenComponent";
import "./PhoneComponent.css";
export default class phoneComponent extends Component {
  render() {
    return (
      <div>
        <div className="IphoneThirteen">
          <IphoneThirteen />
        </div>
        <div className=" IphoneSE">
          <IphoneSE />
        </div>
      </div>
    );
  }
}
