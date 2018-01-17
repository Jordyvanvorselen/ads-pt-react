import { call, fork, put, take } from "redux-saga/effects"
import { RSBUDDY_FETCH_SUCCESS } from "../actions/action-types";
import { fetchUpdatesSuccess, fetchUpdatesFailed, fetchUpdates } from "../actions/updates";

export function* getUpdates(name) {
    try {
        yield put(fetchUpdates())
        const data = yield call(
            fetch,
            `http://192.168.27.170/updates/`,
            {
                method: "POST"
            }
        )

        const updates = yield data.json()
        yield put(fetchUpdatesSuccess(updates))
    } catch (exception) {
        yield put(fetchUpdatesFailed())
        //throw exception
    }
}

export function* watchGetUpdates() {
    while (true) {
        const { data } = yield take(RSBUDDY_FETCH_SUCCESS)

        yield fork(getUpdates, data.name)
    }
}