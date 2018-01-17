import {
  ITEMS_FETCH_SUCCESS,
  ITEMS_FETCH_FAILED,
  ITEMS_FETCH
} from "../actions/action-types"

export function itemsReducer(
  state = { data: [], loading: false, error: null },
  { type, data, error, loading }
) {
  switch (type) {
    case ITEMS_FETCH:
      return {
        ...state,
        loading
      }
    case ITEMS_FETCH_FAILED:
      return {
        ...state,
        loading,
        error
      }
    case ITEMS_FETCH_SUCCESS:
      return {
        data,
        loading,
        error
      }
    default:
      return state
  }
}
