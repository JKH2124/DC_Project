import React, { Component } from "react";

import Header from "./header";
import Hero from "./hero";
import Footer from "./footer";

export default class HeroPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Footer />
      </div>
    );
  }
}
