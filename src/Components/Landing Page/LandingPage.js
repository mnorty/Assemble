import React from 'react'
import {Link} from 'react-router-dom'
import './LandingPage.css'

const LandingPage = () => {
    return <div>
        <div>
            <header className='PageHeader'>Your Current Projects</header>
            <div className='OwnedProjects'>Owned Projects
            <Link to='/CreateProject'>Create New Project</Link>
            </div>
            <div className='AssignedProjects'>Assigned Projects</div>
            
        </div>

    </div>

}

export default LandingPage