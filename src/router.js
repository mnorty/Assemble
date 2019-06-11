import React from 'react'
import {Switch,Route} from 'react-router-dom'
// import Details from './Components/Details/Details'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import LandingPage from'./Components/Landing Page/LandingPage'
import CreateProject from './Components/CreateProject/CreateProject'
import ManagerCreateTask from './Components/ManagerCreateTask/ManagerCreateTask'
import ManagerEditProject from './Components/ManagerEditProject/ManagerEditProject'
import ManagerSpecificProject from './Components/ManagerSpecificProject/ManagerSpecificProject'
import ManagerSpecificTask from './Components/ManagerSpecificTask/ManagerSpecificTask'
import ManagerTaskAssign from './Components/ManagerTaskAssign/ManagerTaskAssign'
import ManagerTaskEdit from './Components/ManagerTaskEdit/ManagerTaskEdit'
import UserProjects from './Components/UserProjects/UserProjects'

//These are all the different path that the website currently has. the Way we have it set up, we will always have the navbar on top, and what ever component we choose inside.
export default (
  <Switch>
    <Route exact path='/' component={Login}/>
    {/* <Route path='/details' component={Details} /> */}
    <Route path='/Register' component={Register}/>
    <Route path='/CreateProject' component={CreateProject}/>
    <Route path='/LandingPage' component={LandingPage}/>
    <Route path='/CreateTask' component={ManagerCreateTask}/>
    <Route path='/EditProject' component={ManagerEditProject}/>
    <Route path='/YourProject' component={ManagerSpecificProject}/>
    <Route path='/ProjectTask' component={ManagerSpecificTask}/>
    <Route path='/AssignTask' component={ManagerTaskAssign}/>
    <Route path='/EditTask' component={ManagerTaskEdit}/>
    <Route path='/Projects' component={UserProjects}/>
  </Switch>
)