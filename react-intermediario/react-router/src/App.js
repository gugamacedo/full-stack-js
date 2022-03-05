import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Users from './pages/Users'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
