import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import LandingPage from'./Components/Landing Page/LandingPage'
import CreateProject from './Components/CreateProject/CreateProject'
import ManagerEditProject from './Components/ManagerEditProject/ManagerEditProject'
import UserProjects from './Components/UserProjects/UserProjects'
import AdminView from './Components/Admin/AdminView'

//These are all the different path that the website currently has. the Way we have it set up, we will always have the navbar on top, and what ever component we choose inside.
export default (
  <Switch>
    <Route exact path='/' component={Login}/>
    <Route path='/Register' component={Register}/>
    <Route path='/CreateProject' component={CreateProject}/>
    <Route path='/LandingPage' component={LandingPage}/>
    <Route path='/EditProject' component={ManagerEditProject}/>
    <Route path='/Projects' component={UserProjects}/>
    <Route path='/Admin' component={AdminView}/>
  </Switch>
)