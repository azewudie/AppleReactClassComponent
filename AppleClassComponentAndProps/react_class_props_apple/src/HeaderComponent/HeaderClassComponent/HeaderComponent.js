import React, { Component } from "react";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import log from "../Header_Images/logo-sm.png";
// import search from "../Header_Images/search-icon-sm.png";
// import cart from "../Header_Images/cart-sm.png";
import "./Style.css";

class HeaderComponent extends Component {
  render() {
    return (
      <ul className=" Ul-wrapper navbar-nav nav-justified w-100 nav-fill">
        <li className="nav-item">
          <a
            className="nav-link Header-Link_wrapper js-scroll-trigger"
            href={this.props.LinkUrl}
          >
            {this.props.LinkName}
          </a>
        </li>
        <li className="nav-item">
          <a
            className="link-image-wrapper nav-link js-scroll-trigger"
            href={this.props.LinkUrl}
          >
            <img src={this.props.LinkImage} alt="" />
          </a>
        </li>
      </ul>
    );
  }
}

export default HeaderComponent;
