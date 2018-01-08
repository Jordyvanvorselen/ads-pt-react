import {
  RSBUDDY_FETCH_FAILED,
  RSBUDDY_FETCH_SUCCESS
} from "../actions/action-types"

export function rsbuddyReducer(
  state = { data: [], loading: false, error: null },
  { type, loading, error, data }
) {
  switch (type) {
    case RSBUDDY_FETCH_FAILED:
      return { ...state, loading, error }
    case RSBUDDY_FETCH_SUCCESS:
      return { data, loading, error }
    default:
      return state
  }
}
