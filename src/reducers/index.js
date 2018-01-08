import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import { itemsReducer } from "./items"
import { rsbuddyReducer } from "./rsbuddy"

export default combineReducers({
  items: itemsReducer,
  routing: routerReducer,
  rsbuddy: rsbuddyReducer
})
