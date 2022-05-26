import React from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./IphoneElevenProComponent.css";
export default function IphoneElevenProComponent() {
  return (
    <section className="third-hightlight-wrapper">
      <div className="container">
        <div className="title-wraper bold">iPhone 11 Pro</div>

        <div className="description-wrapper">
          Pro cameras. Pro display. Pro performance.
        </div>

        <div className="price-wrapper">
          From $24.95/mo. or $599 with trade‑in.
        </div>

        <div className="links-wrapper">
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
    </section>
  );
}
