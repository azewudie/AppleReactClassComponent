import React, { Component } from "react";
import "./App.css";
import Header from "./HeaderComponent/HeaderMainComponent.js";
import Unicef from "./UnicefComponent/UnicefComponent";
import Iphone from "./PhoneComponent/PhoneComponent";
import Epic from "./EpicComponent/EpicComponent";
// import WWDC from "./SectionFourComponent/WWDCComponent/WWDCComponent";
// import Trade from "./TadeComponent/TradeComponent";
import SectionFive from "./SectionFiveComponent/SectionFiveComponent";
import SixSection from "./SectionSixComponent/SectionSixComponent";
import SectionFour from "./SectionFourComponent/SectionFourComponent";
import Footer from "./FooterComponent/FooterComponent";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Unicef />
        <Iphone />
        <Epic />
        <SectionFour />
        <SectionFive />
        <SixSection />
        <Footer />
      </>
    );
  }
}

export default App;
