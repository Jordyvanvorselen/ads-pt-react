import { call, put } from "redux-saga/effects"
import { takeLatest } from "redux-saga"
import { ITEMS_FETCH } from "../actions/action-types"
import { fetchItemsSuccess, fetchItemsFailed } from "../actions/items"

export const fetchGraphQL = (url, query) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
  })
    .then(response => response.json())
    .then(({ data }) => data)

export function* getItems() {
  try {
    const data = yield call(
      fetchGraphQL,
      "http://192.168.27.170/graphql",
      `{
        items {
          id
          name
          store
          rsbuddy(resample:"d", start:"2017-10-10T00:00:00Z") {
            sellingPrice
            sellingCompleted
          }
        }
      }`
    )

    yield put(fetchItemsSuccess(data.items))
  } catch (exception) {
    yield put(fetchItemsFailed())
    //throw exception
  }
}

export function* watchGetItems() {
  yield takeLatest(ITEMS_FETCH, getItems)
}
