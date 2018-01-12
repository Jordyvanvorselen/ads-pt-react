import {
  RSBUDDY_FETCH_FAILED,
  RSBUDDY_FETCH_SUCCESS,
  RSBUDDY_FETCH
} from "../actions/action-types"

export function rsbuddyReducer(
  state = { data: { name: null, rsbuddy: [] }, loading: false, error: null },
  { type, data, error, loading }
) {
  switch (type) {
    case RSBUDDY_FETCH:
      return {
        ...state,
        loading
      }
    case RSBUDDY_FETCH_FAILED:
      return {
        ...state,
        loading,
        error
      }
    case RSBUDDY_FETCH_SUCCESS:
      return { data, loading, error }
    default:
      return state
  }
}
