import {
  RSBUDDY_FETCH,
  RSBUDDY_FETCH_SUCCESS,
  RSBUDDY_FETCH_FAILED
} from "./action-types"

export const fetchRsBuddy = id => ({
  type: RSBUDDY_FETCH,
  id,
  loading: true
})

export const fetchRsBuddySuccess = data => ({
  type: RSBUDDY_FETCH_SUCCESS,
  loading: false,
  error: null,
  data
})

export const fetchRsBuddyFailed = () => ({
  type: RSBUDDY_FETCH_FAILED,
  loading: false,
  error: true
})
