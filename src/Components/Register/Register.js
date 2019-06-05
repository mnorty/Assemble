import React from 'react'
import RegisterForm from '../Login/RegisterForm'
import './Register.css'

const Register = () => {
    return (
        <div className='registrationContainer'>
            <header className='pageHeader'>Registration</header>
            <div className='infoBox'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis labore dolorum velit quis eaque illum totam recusandae provident, distinctio, sed quae nihil consequatur cum quam officiis accusantium? Quis, nam laudantium?</div>
            <RegisterForm/>
        </div>
        )
}

export default Register