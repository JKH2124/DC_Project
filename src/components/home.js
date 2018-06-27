import React, { Component } from 'react';
import Main from './main';
import Footer from './footer';
// import BackgroundSlideShow from './background';


export default class Home extends Component {
  render() {
    return (
      <div className="home-grid">
        <Main />
        <Footer />
        {/* <link rel="stylesheet" type="text/css" href="background.scss" /> */}
        {/* <BackgroundSlideShow /> */}
      </div> 
    );
  }
}