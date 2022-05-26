import React from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "./IphoneElevenComponent.css";
export default function IphoneElevenComponent() {
  return (
    <section className="fourth-heghlight-wrapper">
      <div class="left-side-wrapper ">
        <div class="left-side-container">
          <div class="title-wraper">iPhone 11</div>
          <div class="description-wraper">
            Just the right amount of everything.
          </div>
          <div class="price-wrapper">
            From $18.70/mo. or $499 with trade‑in.<sup>1</sup>
          </div>

          <div class="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Apply now</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
