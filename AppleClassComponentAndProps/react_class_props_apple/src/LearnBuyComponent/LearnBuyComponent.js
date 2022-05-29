import React, { Component } from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./LearnBuyComponent.css";
export default class LearnBuyComponent extends Component {
  render() {
    return (
      <div className="links-wrapper">
        <ul>
          <li>
            <a href=""> Learn More </a>
          </li>
          <li>
            <a href="">Buy</a>
          </li>
        </ul>
      </div>
    );
  }
}
