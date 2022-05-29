import React, { Component } from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Log from "./Header_Images/logo-sm.png";
import Search from "./Header_Images/search-icon-sm.png";
import Cart from "./Header_Images/cart-sm.png";
import Header from "./HeaderClassComponent/HeaderComponent";
import "./Style.css";
class HeaderMainComponent extends Component {
  render() {
    return (
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <a
              className=" logImage navbar-brand mx-auto nav-link nav-item"
              href="#"
            >
              <img src={Log} alt="" />
            </a>
            <div className=" Header-Link-wrapper navbar-collapse collapse">
              <Header LinkUrl="/Store" LinkName="Store" />
              <Header LinkUrl="/Mac" LinkName="Mac" />
              <Header LinkUrl="/ipad" LinkName="ipad" />
              <Header LinkUrl="/iphone" LinkName="iphone" />
              <Header LinkUrl="/Watch" LinkName="Watch" />
              <Header LinkUrl="/AirPods" LinkName="AirPods" />
              <Header LinkUrl="/TV & Home" LinkName="TV&nbsp;&&nbsp;Home" />
              <Header
                LinkUrl="/Only on Apple"
                LinkName="Only&nbsp;on&nbsp;Apple"
              />
              <Header LinkUrl="/Accessories" LinkName="Accessories" />
              <Header LinkUrl="/Support" LinkName="Support" />
              <Header LinkUrl="/Search" LinkImage={Search} />
              <Header LinkUrl="/Cart" LinkImage={Cart} />
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
export default HeaderMainComponent;
