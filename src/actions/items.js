import {
  ITEMS_FETCH,
  ITEMS_FETCH_SUCCESS,
  ITEMS_FETCH_FAILED
} from "./action-types"

export const fetchItems = () => ({
  type: ITEMS_FETCH,
  loading: true
})

export const fetchItemsSuccess = data => ({
  type: ITEMS_FETCH_SUCCESS,
  loading: false,
  error: null,
  data
})

export const fetchItemsFailed = () => ({
  type: ITEMS_FETCH_FAILED,
  loading: false,
  error: true
})
