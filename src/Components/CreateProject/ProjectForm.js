import React, { Component } from 'react'
import axios from 'axios'
// import { withRouter } from 'react-router-dom'
import {updateUser} from '../../redux/userReducer'
import {connect} from 'react-redux'

class ProjectForm extends Component {
	
	constructor() {
		super()
		this.state = {
			title: '',
			due_date: '',
			description: ''
		}
	}

	handleGetCreator_id = () => {
		this.setState({
			creator_id: this.props.id
		})
	}

	handleProjectCreation = (e) => {
		e.preventDefault()
		const {description, title, due_date} = this.state
		const {id} = this.props
		axios
			.post('/auth/createproject', {description, title, due_date , creator_id:id})
			// .then((res) => {
			// 	this.props.history.push('/landing')
			// })
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
		console.log(this.props)
		console.log(this.props.id)
		console.log(this.state.creator_id)
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
					<button className='regButton'>Create Project</button>
				</form>
			</>
		)
	}
}

function mapStateToProps(reduxState) {
	return {
		username: reduxState.user.username,
		id: reduxState.user.id
	}
}

const mapDispatchToProps = {
	updateUser
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProjectForm)
