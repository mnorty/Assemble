import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Details.css'

class Details extends Component {

  userGet = () => {
    console.log(this.state)
  }

  render(){
    return (
      <div>
        <h1>Welcome User</h1>
        <Link to='/LandingPage' className='Link'>Current Projects</Link>
        <button onClick={this.userGet}>Current User</button>
        
      </div>
    )
  }
}

export default Details