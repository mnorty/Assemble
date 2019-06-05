import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {clearUser} from '../../redux/userReducer'
import './LandingPage.css'
import axios from 'axios';

class LandingPage extends Component {

  handleLogout = () => {
    console.log('got to handle logout')
		  axios.get('/auth/logout').then((res) => {
        console.log('step farther')
      clearUser()
      console.log('step farther 2')
			this.props.history.push('/')
		})
	}
    render() {
      return (
        <div>
           <header className='PageHeader'>Your Current Projects</header>
            <div className='OwnedProjects'>Owned Projects
              <div className='ProjectDisplay'></div>
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