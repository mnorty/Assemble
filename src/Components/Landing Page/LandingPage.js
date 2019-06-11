import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {updateUser, clearUser} from '../../redux/userReducer'
import './LandingPage.css'
import axios from 'axios';
import Project from './Project.js'
import {connect} from 'react-redux'

class LandingPage extends Component {
  componentDidMount =  async () =>  {
    await axios
      .get('/auth/details')
      .then((res) => {
        console.log('response from authController',res.data)
        this.props.updateUser(res.data)
        console.log('update user hit in didmount')
      })
      .catch((err) => {
        this.props.history.push('/')
      })

  }

  handleLogout = () => {
		  axios.get('/auth/logout').then((res) => {
      clearUser()
			this.props.history.push('/')
		})
	}
    render() {
      console.log(this.props)
      return (
        <div>
           <header className='PageHeader'>Your Current Projects</header>
           <h1>{this.props.username}</h1>
           <h1>{this.props.id}</h1>
            <div className='OwnedProjects'>Owned Projects
              <div className='ProjectDisplay'>
                {/* <Project/> */}
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
  
  function mapStateToProps(reduxState) {
    console.log(reduxState)
    return {
      username: reduxState.user.username,
      id: reduxState.user.id
    }
  }

  const mapDispatchToProps = {
    updateUser,
    clearUser
  }


  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LandingPage)