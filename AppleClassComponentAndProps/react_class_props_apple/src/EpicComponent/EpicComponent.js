import React, { Component } from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import YouTube from "react-youtube";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./EpicComponent.css";
import Images from "./Epic-Images/atv_logo.png";
export default class EpicComponent extends Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  render() {
    const opts = {
      height: "580",
      width: "1600",
      playerVars: {
        autoplay: 1,
        // https://developers.google.com/youtube/player_parameters,
      },
    };

    return (
      <div className="youtube-wrapper">
        <YouTube videoId="vnoNeMlNeD0" opts={opts} onReady={this._onReady} />
        <div>
          <img src={Images} alt="" />
          <img src={Images} alt="" />
          <img src={Images} alt="" />
          <img src={Images} alt="" />
        </div>
      </div>
    );
    return (
      <div className="Epic-wrapper">
        <div className="Epic-outside-wrapper">
          <div className="Epic-internal-wrapper">
            <div className="Apple-Tv-wrapper"></div>
            <div className="Planet-wrapper"></div>
            <div className="Epic-event-wrapper"></div>
            <div className="Epic-player-wrapper">
              <ul className="Epic-internal-player-wrapper">
                <li className="Epic-youtube-wrapper"></li>
                <li className="Epic-PlayerButton-wrapper"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
