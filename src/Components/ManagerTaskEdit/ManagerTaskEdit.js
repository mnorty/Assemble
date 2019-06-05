import React from 'react'
// import {Link} from 'react-router-dom'
import './ManagerTaskEdit.css'
import TaskEditForm from './TaskEditForm'


const ManagerCreateTask = () => {
    return <>
    <header className='PageHeader'>Project name</header>
    <h1>
        <TaskEditForm/>
    </h1>
    </>
}

export default ManagerCreateTask