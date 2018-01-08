import { all } from "redux-saga/effects"
import { watchGetItems } from "./items"
import { watchGetRsBuddy } from "./rsbuddy"

export default function* rootSaga() {
  yield all([watchGetItems(), watchGetRsBuddy()])
}
