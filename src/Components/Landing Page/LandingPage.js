import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {clearUser} from '../../redux/userReducer'
import './LandingPage.css'
import axios from 'axios';
import Project from '../Landing Page/project'

class LandingPage extends Component {

  handleLogout = () => {
		  axios.get('/auth/logout').then((res) => {
      clearUser()
			this.props.history.push('/')
		})
	}
    render() {
      return (
        <div>
           <header className='PageHeader'>Your Current Projects</header>
            <div className='OwnedProjects'>Owned Projects
              <div className='ProjectDisplay'>
                <Project/>
              </div>
              <Link to='/CreateProject'>Create New Project</Link>
              </div>
            <div className='AssignedProjects'>Assigned Projects
              <div className='ProjectDisplay'></div>
              <button to='/' className='logOutButton' onClick={this.handleLogout}>Log Out</button>
              </div>
        </div>
      )}
	}

export default LandingPage