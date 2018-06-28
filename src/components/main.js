import React, { Component } from "react";
import "../style/content.scss";
import "../style/main.scss";

export default class Main extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <img className="main_image" src="assets/leagueOne.jpg" />
          <div className="heading">Detective Comics</div>
          <div className="quote">
            You will give the people of Earth an ideal to strive towards. -
            Jor-El (Except the people of Marvel)
          </div>
        </div>
      </div>
    );
  }
}
