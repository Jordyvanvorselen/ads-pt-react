import { call, fork, put, take } from "redux-saga/effects"
import { RSBUDDY_FETCH_SUCCESS } from "../actions/action-types";
import { fetchUpdatesSuccess, fetchUpdatesFailed } from "../actions/updates";

export function* getUpdates(name) {
    try {
        const data = yield call(
            fetch,
            `http://192.168.27.170/mentions/mentionsdates?word=${name}&startdate=1504224000&enddate=1514678400`,
            {
                methods: "POST"
            }
        )

        yield put(fetchUpdatesSuccess(data))
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