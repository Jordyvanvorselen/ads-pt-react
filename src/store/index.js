import { createLogger } from "redux-logger"
import { createStore, applyMiddleware, compose } from "redux"
import { routerMiddleware } from "react-router-redux"
import thunk from "redux-thunk"
import createHistory from "history/createBrowserHistory"
import createSagaMiddleware from "redux-saga"
import rootReducer from "../reducers"
import rootSaga from "../sagas/index"

export const history = createHistory()

const sagaMiddleware = createSagaMiddleware()

const initialState = {}
const enhancers = []
const middleware = [thunk, createLogger(), routerMiddleware(history)]

const composedEnhancers = compose(
  applyMiddleware(...middleware, sagaMiddleware),
  ...enhancers
)

const store = createStore(rootReducer, initialState, composedEnhancers)

sagaMiddleware.run(rootSaga)

export default store
