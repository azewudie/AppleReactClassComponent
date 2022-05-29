import React, { Component } from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import WWDCC from "./WWDCComponent/WWDCComponent";
import Trade from "./TadeComponent/TradeComponent";
import "./SectionFourComponent.css";
export default class SectionFourComponent extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="left-side-wrapper  col-sm-12 col-md-6">
            <WWDCC />
          </div>

          <div className=" right-side-wrapper >col-sm-12 col-md-6">
            <Trade />
          </div>
        </div>
      </div>
    );
  }
}
