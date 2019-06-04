import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Details from './Components/Details/Details'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import LandingPage from'./Components/Landing Page/LandingPage'
//These are all the different path that the website currently has. the Way we have it set up, we will always have the navbar on top, and what ever component we choose inside.
export default (
  <Switch>
    <Route exact path='/' component={Login}/>
    <Route path='/details' component={Details} />
    <Route path='/Register' component={Register}/>
    <Route path='/LandingPage' component={LandingPage}/>
  </Switch>
)