import React from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Arcade from "../ArcadeComponent/ArcadeComponent.js";
import AppleCard from "../AppleCardComponent/AppleCardComponent.js";
import "./SixthComponent.css";

export default function SixthComponent() {
  return (
    <div class="container-fluid">
      <div className="row">
        <div className="left-side-wrapper  col-sm-12 col-md-6">
          <Arcade />
        </div>

        <div className=" right-side-wrapper >col-sm-12 col-md-6">
          <AppleCard />
        </div>
      </div>
    </div>
  );
}
