import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Second from './Second'
import Login from './Login'
import HideMe from './HideMe'
import Authorization from '../components/Authorization'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /Second
// and /schedule routes will match any pathname that starts
// with /Second or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/second' component={Second}/>
      <Route path='/login' component={Login}/>
      <Route path='/hideme' component={Authorization(HideMe, ['manager', 'admin'])}/>
    </Switch>
  </main>
)

export default Main