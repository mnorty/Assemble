import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Details extends Component {
  render(){
    return (
      <div>
        <h1>Details</h1>,
        <button>yo this is details</button>
        <Link to='/LandingPage'>Landing Page</Link>
        
      </div>
    )
  }
}

export default Details