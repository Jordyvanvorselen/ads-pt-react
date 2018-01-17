import React from "react"
import { Route } from "react-router-dom"
import Detail from "../containers/Detail"
import Header from "./Header"
import Overview from "../containers/Overview"

const App = () => (
  <div>
    <Header />

    <Route exact path="/" component={Overview} />
    <Route path="/detail" component={Detail} />
  </div>
)

export default App
