import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

/* Components Import */
import Landing from './components/Landing/Landing'
import Signin from './components/Signin/Signin'
import Signup from './components/Signup/Signup'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/signup' component={Signup} />
        <Route path='/signin' component={Signin} />
        <Route path='/' render={() => <Landing />} exact />
      </Switch>
    </Router>
  )
}

export default App
