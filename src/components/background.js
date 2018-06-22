import React, { Component } from 'react'
 
import BackgroundSlideshow from 'react-background-slideshow'
 
import batman from './img/batman.png'
// import image2 from './assets/002.jpg'
// import image3 from './assets/003.jpg'
 
export default class BackgroundSlideShow extends Component {
  render () {
    return (
      <div>
        <BackgroundSlideshow images={[ batman ]} />
      </div>
    )
  }
}