import React from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import TvIcon from "../commonResource/images/icons/apple-tv-logo.png";
import Banker from "../commonResource/images/home/banker.png";
import "./AppleTvComponent.css";
export default function AppleTvComponent() {
  return (
    <section class="fifth-heghlight-wrapper">
      <div className="left-side-wrapper ">
        <div className="left-side-container">
          <div className="top-logo-wrapper">
            <div className="logo-wrapper">
              <img src={TvIcon} />
            </div>
          </div>

          <div className="tvshow-logo-wraper">
            <img src={Banker} />
          </div>

          <div className="watch-more-wrapper">
            <a href="#">Watch now on the Apple TV App</a>
          </div>
        </div>
      </div>
    </section>
  );
}
