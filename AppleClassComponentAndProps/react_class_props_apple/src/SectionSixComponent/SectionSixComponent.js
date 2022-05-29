import React, { Component } from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Pride from "./PrideComponent/PrideComponent";
import Card from "./CardComponent/CardComponent";
import "./SectionSixComponent.css";
export default class SectionSixComponent extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="left-side-wrapper  col-sm-12 col-md-6">
            <Card />
          </div>

          <div className=" right-side-wrapper >col-sm-12 col-md-6">
            <Pride />
          </div>
        </div>
      </div>
    );
  }
}
