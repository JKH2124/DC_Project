<<<<<<< HEAD
import React, { Component } from "react";
import Header from "./header";
import Hero from "./hero";
import Villain from "./villain";
=======
import React, { Component } from 'react';
import Main from './main';
import Footer from './footer';
// import BackgroundSlideShow from './background';

>>>>>>> f12ed3901d04ecf877e56c97194a2e05c389bd7e

export default class Home extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div>
        <Header />
        {/* <Hero /> */}
        <Villain />
      </div>
=======
      <div className="home-grid">
        <Main />
        <Footer />
        {/* <link rel="stylesheet" type="text/css" href="background.scss" /> */}
        {/* <BackgroundSlideShow /> */}
      </div> 
>>>>>>> f12ed3901d04ecf877e56c97194a2e05c389bd7e
    );
  }
}