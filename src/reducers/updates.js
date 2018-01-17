import {
    UPDATES_FETCH, UPDATES_FETCH_SUCCESS, UPDATES_FETCH_FAILED
} from "../actions/action-types"

export function updateReducer(
    state = { data: [], loading: false, error: null },
    { type, data, error, loading }
) {
    switch (type) {
        case UPDATES_FETCH:
            return {
                ...state,
                loading
            }
        case UPDATES_FETCH_FAILED:
            return {
                ...state,
                loading,
                error
            }
        case UPDATES_FETCH_SUCCESS:
            return { data, loading, error }
        default:
            return state
    }
}
