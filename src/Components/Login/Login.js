import React, { Component } from 'react'
import axios from 'axios'
import { updateUser } from '../../redux/userReducer'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import './Login.css'

class Login extends Component {
	componentDidMount() {
		axios.get('/auth/user').then((res) => {
			this.props.updateUser(res.data)
			this.props.history.push('/LandingPage')
		})
		this.props.id && this.props.history.push('/LandingPage')
	}

	render() {
		return (
			<div className='background'>
				<div className='loginContainer' id='totot'>
					<header className='top'id='topTop'>
						<div className='welcomeLogin'>Welcome to Assemble</div>
						<h1 id='h1'>Welcom to Assemble</h1>
					</header>
				
				<LoginForm />
			</div>
		</div>
		)
	}
}

function mapStateToProps(reduxState) {
	return reduxState
}

export default connect(
	mapStateToProps,
	{ updateUser }
)(Login)
