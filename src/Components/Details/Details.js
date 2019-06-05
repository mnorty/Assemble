import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Details.css'

class Details extends Component {
  render(){
    return (
      <div>
        <h1>Details</h1>,
        <Link to='/LandingPage' className='Link'>Landing Page</Link>
        
      </div>
    )
  }
}

export default Details