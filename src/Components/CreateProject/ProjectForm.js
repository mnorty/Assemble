import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class ProjectForm extends Component {
	constructor() {
		super()
		this.state = {
			title: '',
			due_date: '',
			description: ''
		}
	}

	handleProjectCreation = (e) => {
		e.preventDefault()
		const {description, title, due_date } = this.state
		console.log(this.state)
		axios
			.post('/auth/createproject', {description, title, due_date })
			.then((res) => {
				this.props.history.push('/landing')
			})
			.catch((err) => {
				console.log(err)
			})
		e.target.description.value = ''
		e.target.due_date.value = ''
		e.target.title.value = ''
	}

	handleRegisterInfoUpdate = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	render() {
		return (
			<>
				<form onSubmit={this.handleProjectCreation} className='regForm'>
					<h1>description:</h1>
					<input
						className='input'
						type='text'
						placeholder='Enter the Project Description Here'
						name='description'
						onChange={this.handleRegisterInfoUpdate}
					/>
					<h1>title:</h1>
					<input
						className='input'
						type='text'
						placeholder='Enter Project Name Here'
						name='title'
						onChange={this.handleRegisterInfoUpdate}
					/>
					<h1>due_date:</h1>
					<input
						className='input'
						type='date'
						placeholder='Super Secret Shhhhh'
						name='due_date'
						onChange={this.handleRegisterInfoUpdate}
					/>
					<button className='regButton'>Register</button>
				</form>
			</>
		)
	}
}

export default withRouter(ProjectForm)
