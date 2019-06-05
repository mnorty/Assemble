import React from 'react'
import {Link} from 'react-router-dom'
import './LandingPage.css'

const LandingPage = () => {
    return (
    	<div>
      	 <header className='PageHeader'>Your Current Projects</header>
          <div className='OwnedProjects'>Owned Projects
            <div className='ProjectDisplay'></div>
            <Link to='/CreateProject'>Create New Project</Link>
          	</div>
          <div className='AssignedProjects'>Assigned Projects
            <div className='ProjectDisplay'></div>
          	</div>
			</div>
	)}

export default LandingPage