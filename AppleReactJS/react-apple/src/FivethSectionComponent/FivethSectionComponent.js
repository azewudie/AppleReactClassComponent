import React from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AppleTv from "../AppleTvComponent/AppleTvComponent.js";
import AppleWatch from "../AppleWatchComponent/AppleWatchComponent.js";
import "./FivethSectionComponent.css";
export default function FivethSectionComponent() {
  return (
    <div class="container-fluid">
      <div className="row">
        <div className="left-side-wrapper  col-sm-12 col-md-6">
          <AppleTv />
        </div>

        <div className=" right-side-wrapper >col-sm-12 col-md-6">
          <AppleWatch />
        </div>
      </div>
    </div>
  );
}
