import React, { Component } from "react";
import Header from "./header";
import Hero from "./hero";
import Villain from "./villain";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <Hero /> */}
        <Villain />
      </div>
    );
  }
}
