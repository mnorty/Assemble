import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Details.css'

class Details extends Component {
  render(){
    return (
      <div>
        <h1>Welcome User</h1>
        <Link to='/LandingPage' className='Link'>Current Projects</Link>
        
      </div>
    )
  }
}

export default Details