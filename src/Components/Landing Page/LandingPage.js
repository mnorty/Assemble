import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {updateUser, clearUser} from '../../redux/userReducer'
import './LandingPage.css'
import axios from 'axios';
import Project from './project'
import {connect} from 'react-redux'

class LandingPage extends Component {
  componentDidMount =  async () =>  {
    await axios
      .get('/auth/details')
      .then((res) => {
        this.props.updateUser(res.data)
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
      console.log('Username: ',this.props.username,'|', 'User Id: ',this.props.id)
      return (
        <div>
           <header className='PageHeader'>Your Current Projects</header>
            <div className='PageHeader' id='intro'>
              <h1>Welcome {this.props.username}!</h1>
              <h1>User ID: {this.props.id}</h1>
            </div>
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
  
  function mapStateToProps(reduxState) {
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