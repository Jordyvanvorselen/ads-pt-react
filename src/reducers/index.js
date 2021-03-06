import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import { itemsReducer } from "./items"
import { rsbuddyReducer } from "./rsbuddy"
import { mentionsReducer } from "./mentions"
import { updateReducer } from "./updates"

export default combineReducers({
  items: itemsReducer,
  routing: routerReducer,
  rsbuddy: rsbuddyReducer,
  mentions: mentionsReducer,
  update: updateReducer
})
