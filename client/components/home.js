import React from 'react'
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min'

import Header from './header'

import Dashboard from './dashboard'
import Main from './main'
import Profile from './profile'

const Home = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/dashboard" component={() => <Dashboard />} />
        <Route exact path="/dashboard/main" component={() => <Main />} />
        <Route exact path="/dashboard/profile/:username" component={() => <Profile />} />
      </Switch>
    </div>
  )
}

Home.propTypes = {}

export default Home
