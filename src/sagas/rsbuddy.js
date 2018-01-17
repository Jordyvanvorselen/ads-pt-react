import { fetchGraphQL } from "./items"
import { call, fork, put, take } from "redux-saga/effects"
import { fetchRsBuddySuccess, fetchRsBuddyFailed } from "../actions/rsbuddy"
import { RSBUDDY_FETCH } from "../actions/action-types"

export function* getRsBuddy(id) {
  try {
    const data = yield call(
      fetchGraphQL,
      "http://192.168.27.170/graphql",
      `{
          item(id: ${id}) {
            id
            name
            rsbuddy(resample: "w") {
              timestamp
              buyingPrice
              buyingCompleted
              sellingCompleted
            }
          }
        }`
    )

    yield put(fetchRsBuddySuccess(data.item))
  } catch (exception) {
    yield put(fetchRsBuddyFailed())
    //throw exception
  }
}

export function* watchGetRsBuddy() {
  while (true) {
    const { id } = yield take(RSBUDDY_FETCH)

    yield fork(getRsBuddy, id)
  }
}
