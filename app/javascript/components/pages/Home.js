import React, { Component } from 'react'
import apartment from '../assets/apartment.png'

class Home extends Component{
  render(){
    return(
      <React.Fragment>
        <div id="home">
          <p id="home-title">Find your next home.</p>
          <img src={ apartment } alt="apartment street view" />
        </div>
      </React.Fragment>
    )
  }
}
export default Home
