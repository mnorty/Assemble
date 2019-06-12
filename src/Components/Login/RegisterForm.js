import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import './RegisterForm.css'
import swal from '@sweetalert/with-react'
import {Link} from 'react-router-dom'

class RegisterForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			email: ''
		}
	}

	handleUserRegister = (e) => {
		e.preventDefault()
		const {email, username, password } = this.state
		axios
			.post('/auth/register', {email, username, password })
			// .then((res) => {
			// 	this.props.history.push('/details')
			// })
			.catch((err) => {
				swal({
					text: 'Username has already been taken',
					button:'Okay'
				})
				console.log(err)
			})
		e.target.email.value = ''
		e.target.password.value = ''
		e.target.username.value = ''
	}

	handleRegisterInfoUpdate = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	render() {
		return (
			<>
				<form onSubmit={this.handleUserRegister} className='regForm' id='inputOne'>
					<input
						className='input'
						type='text'
						placeholder='Email'
						name='email'
						onChange={this.handleRegisterInfoUpdate}
					/>
					<input
						className='input'
						type='text'
						placeholder='UserName'
						name='username'
						onChange={this.handleRegisterInfoUpdate}
					/>
					<input
						className='input'
						type='password'
						placeholder='Password'
						name='password'
						onChange={this.handleRegisterInfoUpdate}
					/>
					<button className='regButton'>Register</button>
				<h1 className='joinInvite'>Not a Member Yet? Join 
					<Link to='/'> Here </Link>
				</h1>
				</form>
			</>
		)
	}
}

export default withRouter(RegisterForm)
