import React from "react"
import { Route, Link } from "react-router-dom"
import { Switch } from "react-router"
import Overview from "../containers/Overview"

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>

    <Switch>
      <Route exact path="/" component={Overview} />
    </Switch>
  </div>
)

export default App
