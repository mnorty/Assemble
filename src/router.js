import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from './Components/Home'
import Details from './Components/Details'
import Login from './Components/Login'
import Register from './Components/Register'
//These are all the different path that the website currently has. the Way we have it set up, we will always have the navbar on top, and what ever component we choose inside.
export default (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/login' component={Login} />
    <Route path='/details' component={Details} />
    <Route path='/Register' component={Register}/>
  </Switch>
)