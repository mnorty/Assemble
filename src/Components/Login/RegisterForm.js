import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import './RegisterForm.css'

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
				<form onSubmit={this.handleUserRegister} className='regForm'>
					<h1>Email:</h1>
					<input
						className='input'
						type='text'
						placeholder='Example@email.com'
						name='email'
						onChange={this.handleRegisterInfoUpdate}
					/>
					<h1>UserName:</h1>
					<input
						className='input'
						type='text'
						placeholder='What"s your Alias?'
						name='username'
						onChange={this.handleRegisterInfoUpdate}
					/>
					<h1>Password:</h1>
					<input
						className='input'
						type='password'
						placeholder='Super Secret Shhhhh'
						name='password'
						onChange={this.handleRegisterInfoUpdate}
					/>
					<button className='regButton'>Register</button>
				</form>
			</>
		)
	}
}

export default withRouter(RegisterForm)
