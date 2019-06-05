import React from 'react'
import {Link} from 'react-router-dom'
// import {connect} from 'react-redux'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navBar'>
      <div className="dropdown">
        <button className="dropbtn">
          <div className="container">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </button>
        <div className="dropdown-content">
        <Link to="/">Home</Link>
        <Link to="/Register">Register</Link>
        <Link to="/Details">Details</Link>
        <Link to="/CreateProject">Create Project</Link>
        <Link to="/LandingPage">LandingPage</Link>
        <Link to="/CreateTask">Create Task</Link>
        <Link to="/EditProject">Edit Project</Link>
        <Link to="/YourProject">Your Project</Link>
        <Link to="/ProjectTask">Project Task</Link>
        <Link to="/AssignTask">AssignTask</Link>
        <Link to="/EditTask">Edit Task</Link>
        <Link to="/Projects">Projects</Link>
        </div>
      {/* <h1 className='logo'>Assemble</h1> */}
</div>
    </nav>
  )
}

export default Navbar