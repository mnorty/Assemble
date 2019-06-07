import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import './LoginForm.css'
import {Link} from 'react-router-dom'
import swal from '@sweetalert/with-react'

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
				this.props.history.push('/details')
			})
			.catch((err) => {
				swal({
					text: 'Username or Password are incorrect',
					button: 'Okay'
				})
				console.log(err)
			})
		e.target.username.value = ''
		e.target.password.value = ''
	}
	render() {
		return (
			<div className='loginFormContainer'>
				<div className='descriptionBox'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel debitis aspernatur unde in quo officiis asperiores corporis neque eaque eos similique voluptas, pariatur accusamus voluptatum fugiat, earum excepturi autem quia?
				</div>
				<h1>Login</h1>
				<form onSubmit={this.handleUserLogin} className='loginFields'>
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
					<button className='regButton'>Log In</button>
				</form>
				<h1 className='joinInvite'>Not a Member Yet? Join 
					<Link to='/register'> Here </Link>
				</h1>
			</div>
		)
	}
}

export default withRouter(LoginForm)
