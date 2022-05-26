import React from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import WatchLog from "../commonResource/images/icons/watch-series5-logo.png";
import "./AppleWatchComponent.css";
export default function AppleWatchComponent() {
  return (
    <section class="fifth-heghlight-wrapper">
      <div className="right-side-wrapper ">
        <div class="right-side-container">
          <div class="top-logo-wrapper">
            <div class="logo-wrapper">
              <img src={WatchLog} />
            </div>
          </div>
          <div class="description-wraper">
            With the Always-On Retina display.
            <br />
            You’ve never seen a watch like this.
          </div>
          <div class="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
