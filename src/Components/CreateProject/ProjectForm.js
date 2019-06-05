import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import './ProjectForm.css'
import {Link} from 'react-router-dom'

class LoginForm extends Component {
	constructor() {
		super()
		this.state = {
			title: '',
			due_date: '',
			description: ''
		}
	}
	handleLoginInfoUpdate = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleProjectCreation = (e) => {
		e.preventDefault()
		const { title, due_date,description } = this.state
		axios
			.post('/auth/login', { title, due_date,description })
			.then((res) => {
				this.props.history.push('/details')
			})
			.catch((err) => {
				console.log(err)
			})
		e.target.title.value = ''
		e.target.due_date.value = ''
	}
	render() {
		return (
			<div className='loginFormContainer'>
				
				<h1>Make a new Project</h1>
				<form onSubmit={this.handleProjectCreation} className='loginFields'>
					<h1>Project Name:</h1>
					<input
						className='input'
						type='text'
						name='title'
						placeholder='title'
						onChange={this.handleLoginInfoUpdate}
					/>
					<h1>Date:</h1>
					<input
						className='input'
						type='date'
						name='due_date'
						onChange={this.handleLoginInfoUpdate}
					/>
						<h1>Description:</h1>
						<input
						className='input'
						id='description'
						type='text'
						name='due_date'
						placeholder='Description'
						onChange={this.handleLoginInfoUpdate}
					/>
					<button className='regButton'>Create Project</button>
				</form>
			</div>
		)
	}
}

export default withRouter(LoginForm)
