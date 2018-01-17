import {
    MENTIONS_FETCH_FAILED,
    MENTIONS_FETCH_SUCCESS,
    MENTIONS_FETCH
} from "../actions/action-types"

export function mentionsReducer(
    state = { data: 0, loading: false, error: null },
    { type, data, error, loading }
) {
    switch (type) {
        case MENTIONS_FETCH:
            return {
                ...state,
                loading
            }
        case MENTIONS_FETCH_FAILED:
            return {
                ...state,
                loading,
                error
            }
        case MENTIONS_FETCH_SUCCESS:
            return { data, loading, error }
        default:
            return state
    }
}
