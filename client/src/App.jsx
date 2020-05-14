import React, { Component } from 'react'
import "./App.css"
import { Switch, Route } from 'react-router-dom'
import { verifyUser } from './services/user'
import SignUp from './components/SignUp'
import LandingPage from "./components/LandingPage"

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null
    }
  }

  async componentDidMount() {
    const user = await verifyUser()
    if (user) {
      this.setState(user)
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })



  render() {
    return (
      <div className="app">
        <h1>Sup front</h1>
        <Switch>
        <Route exact path="/" render={() => <LandingPage />} />
        <Route exact path="/sign-up" render={() => <SignUp />} />
        </Switch>
      </div>
    )
  }
}