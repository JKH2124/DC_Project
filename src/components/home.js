import React, { Component } from 'react';
import Main from './main';
import Footer from './footer';
import BackgroundSlideShow from './background';


export default class Home extends Component {
  render() {
    return (
      <div>
        <Main />
        <Footer />
        <BackgroundSlideShow />
      </div> 
    );
  }
}
