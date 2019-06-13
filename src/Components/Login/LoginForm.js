import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import './LoginForm.css'
import {Link} from 'react-router-dom'
import swal from '@sweetalert/with-react'
import {makeStyles} from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab';


class LoginForm extends Component {
	
	constructor() {
		super()
		this.state = {
			username: '',
			password: ''
		}
	}
	handleLoginInfoUpdate = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	
	handleUserLogin = (e) => {
		e.preventDefault()
		const { username, password } = this.state
		axios
		.post('/auth/login', { username, password })
		.then((res) => {
			this.props.history.push('/LandingPage')
		})
		.catch((err) => {
			swal({
				text: 'Username or Password are incorrect',
					button: 'Okay'
				})
				console.log(err)
			})
			// e.target.username.value = ''
			// e.target.password.value = ''
		}
		
		render() {
			const classes = makeStyles(theme => ({
				fab: {
					margin: theme.spacing(1),
				},
				extendedIcon: {
					marginRight: theme.spacing(1),
				},
			}));
			
			return (
				<div className='loginFormContainer'>
				<form onSubmit={this.handleUserLogin} className='loginFields' id='inputOne'>
					<input
						className='input'
						type='text'
						name='username'
						placeholder='username'
						onChange={this.handleLoginInfoUpdate}
						/>
					<input
						className='input'
						type='password'
						name='password'
						placeholder='password'
						onChange={this.handleLoginInfoUpdate}
					/>
					{/* <button className='regButton'>Log In</button> */}
					<Fab variant="extended" aria-label="Delete" className={classes.fab} onClick={this.handleUserLogin} >
        {/* <NavigationIcon className={classes.extendedIcon} /> */}
        Login
      </Fab>
				</form>
				<h1 id='joinInvite'>Not a Member Yet? Join 
					<Link to='/register'> Here </Link>
				</h1>
			</div>
		)
	}
}

export default withRouter(LoginForm)
