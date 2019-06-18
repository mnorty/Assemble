import React from 'react'
import RegisterForm from '../Login/RegisterForm'
import './Register.css'

const Register = () => {
    return (
        <div classname='outerContainer'>
            <div className='registrationContainer'>
                <div className='top'>
                    <header>
                        <h1 className='welcomeRegister'>Create your Account Here</h1>
                    </header>
                </div>
                <RegisterForm/>
            </div>
        </div>
        )
}

export default Register