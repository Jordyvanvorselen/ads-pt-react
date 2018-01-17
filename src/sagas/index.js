import { all } from "redux-saga/effects"
import { watchGetItems } from "./items"
import { watchGetRsBuddy } from "./rsbuddy"
import { watchGetMentions } from "./mentions";
import { watchGetUpdates } from "./updates";

export default function* rootSaga() {
  yield all([watchGetItems(), watchGetRsBuddy(), watchGetMentions(), watchGetUpdates()])
}
