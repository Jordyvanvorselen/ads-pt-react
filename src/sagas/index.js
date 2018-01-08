import { all } from "redux-saga/effects"
import { watchGetItems } from "./items"

export default function* rootSaga() {
  yield all([watchGetItems()])
}
