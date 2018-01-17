import { call, fork, put, take } from "redux-saga/effects"
import { RSBUDDY_FETCH_SUCCESS, MENTIONS_FETCH } from "../actions/action-types";
import { fetchMentionsSuccess, fetchMentionsFailed, fetchMentions } from "../actions/mentions";

export function* getMentions(name) {
    try {
        yield put(fetchMentions())

        const data = yield call(
            fetch,
            `http://192.168.27.170/mentions/mentionsdates?word=${name}&startdate=1504224000&enddate=1514678400`,
            {
                method: "POST"
            }
        )

        const mentions = yield data.json()
        yield put(fetchMentionsSuccess(mentions))
    } catch (exception) {
        console.log(exception)
        yield put(fetchMentionsFailed())
        //throw exception
    }
}

export function* watchGetMentions() {
    while (true) {
        const { data } = yield take(RSBUDDY_FETCH_SUCCESS)

        yield fork(getMentions, data.name)
    }
}