import React from "react";

import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import Cdc from "../CdcComponent/CdcComponent.js";
import IphoneEleven from "../IphoneElevenComponent/IphoneElevenComponent.js";

import "./FourthSectionComponent.css";

export default function FourthSectionComponent() {
  return (
    <div class="container-fluid">
      <div className="row">
        <div className="left-side-wrapper  col-sm-12 col-md-6">
          <IphoneEleven />
        </div>

        <div className=" right-side-wrapper >col-sm-12 col-md-6">
          <Cdc />
        </div>
      </div>
    </div>
  );
}
