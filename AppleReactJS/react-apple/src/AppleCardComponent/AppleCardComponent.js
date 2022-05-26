import React from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "./AppleCardComponent.css";
export default function AppleCardComponent() {
  return (
    <section class="sixth-heghlight-wrapper">
      <div className="right-side-wrapper ">
        <div className="right-side-container">
          <div className="title-wraper">Apple Card Monthly Installments</div>
          <div className="description-wraper">
            Pay for your next iPhone over time, interest-free with Apple Card.
          </div>
          <div className="links-wrapper">
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
