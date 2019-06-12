import React from 'react'
import RegisterForm from '../Login/RegisterForm'
import './Register.css'

const Register = () => {
    return (
        <div className='registrationContainer'>
            <div className='top'>
                <header>
                    <h1 className='welcome'>Create Account</h1>
                </header>
            </div>
            <RegisterForm/>
        </div>
        )
}

export default Register