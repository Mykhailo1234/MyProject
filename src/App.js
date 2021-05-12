import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import { Profile } from './Page/Profile/Profile'
import { News } from './Page/News/News'
import { Music } from './Page/Music/Music'
import { Setting } from './Page/Setting/Setting'
import { Dialogs } from './Page/Messages/Dialogs'


const App = (props) => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" render={Profile} />
        <Route exact path="/dialogs" render={Dialogs} />
        <Route exact path="/news" render={News} />
        <Route exact path="/music" render={Music} />
        <Route exact path="/setting" render={Setting} />
      </Switch>
    </Router>
  )
}

export default App

