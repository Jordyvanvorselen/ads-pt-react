import "babel-polyfill"
import "./style.css"

import { ConnectedRouter } from "react-router-redux"
import { Provider } from "react-redux"
import { render } from "react-dom"
import App from "./components/App"
import React from "react"
import store, { history } from "./store"

document.addEventListener("DOMContentLoaded", () => {
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
  )
})
