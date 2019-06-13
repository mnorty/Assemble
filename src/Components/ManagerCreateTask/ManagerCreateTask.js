import React from 'react'
// import {Link} from 'react-router-dom'
import './ManagerCreateTask'
import CreateTaskForm from './CreateTaskForm'


const ManagerCreateTask = () => {
    return <>
    <header className='PageHeader'>Project name</header>
    <h1>
        <CreateTaskForm/>
    </h1>
    </>
}

export default ManagerCreateTask