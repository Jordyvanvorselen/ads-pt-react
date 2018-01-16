import React from "react"
import { Route } from "react-router-dom"
import Content from "./Content"
import Detail from "../containers/Detail"
import Header from "./Header"
import Overview from "../containers/Overview"

const App = () => (
  <div>
    <Header />

    <Content>
      <Route exact path="/" component={Overview} />
      <Route path="/detail" component={Detail} />
    </Content>
  </div>
)

export default App
