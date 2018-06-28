import React, { Component } from "react";

import Header from "./header";
import Villain from "./villain";
import Footer from "./footer";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Villain />
        <Footer />
      </div>
    );
  }
}
