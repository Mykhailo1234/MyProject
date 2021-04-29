import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import { Profile } from './Page/Profile/Profile'
import { News } from './Page/News/News'
import { Music } from './Page/Music/Music'
import { Setting } from './Page/Setting/Setting'
import { Dialogs } from './Page/Messages/Dialogs'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route exact path="/dialogs" component={Dialogs} />
        <Route exact path="/news" component={News} />
        <Route exact path="/music" component={Music} />
        <Route exact path="/setting" component={Setting} />
      </Switch>
    </Router>
  )
}

export default App

