import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import LoginIndex from './components/LoginHome/loginhome.jsx'
import Login from './components/LoginForm/loginform.jsx'
import SignUp from './components/SignupForm/signupform.jsx'
import PasswordReset from './components/PasswordReset/passwordreset.jsx'

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={LoginIndex}/>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/passwordreset' component={PasswordReset} />
      </Router>
    )
  }
}

export default App