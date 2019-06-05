import React from 'react'
import {Link} from 'react-router-dom'
import './ManagerSpecificProject.css'

const ManagerSpecificProject = () => {
    return <>
        <div>
            <header className='pageHeader'>Project Name</header>
            <div className='assigned'>Assigned Tasks
                <div className='taskDisplay'></div>
                <Link to='/ManagerCreateTask'>Create Project</Link>
            </div>
            <div className='unassigned'>Unassigned Tasks
                <div className='taskDisplay'></div>
            </div>
        </div>
    </>
}

export default ManagerSpecificProject