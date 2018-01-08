import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import { itemsReducer } from "./items"

export default combineReducers({
  items: itemsReducer,
  routing: routerReducer
})
