import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import Home from './home'
import SignIn from './signin'

export default function App() {
  return (
    <Switch>
      <Route path="/signin" component={SignIn} />
      <Route path="/" components={Home} />
    </Switch>
  )
}