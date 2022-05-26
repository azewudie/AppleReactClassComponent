import React from "react";
import Arcade from "../commonResource/images/icons/arcade.png";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "./ArcadeComponent.css";
export default function ArcadeComponent() {
  return (
    <section class="sixth-heghlight-wrapper">
      <div className="left-side-wrapper">
        <div className="left-side-container">
          <div className="top-logo-wrapper">
            <div className="logo-wrapper">
              <img src={Arcade} />
            </div>
          </div>
          <div className="description-wraper white">
            Agent 8 is a small hero on a big mission.
          </div>
          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">
                  Play now<sup>2</sup>
                </a>
              </li>
              <li>
                <a href="">Learn about Apple Arcade</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
