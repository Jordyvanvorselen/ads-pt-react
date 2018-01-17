import { UPDATES_FETCH_FAILED, UPDATES_FETCH_SUCCESS, UPDATES_FETCH } from "./action-types";

export const fetchUpdates = () => ({
    type: UPDATES_FETCH,
    loading: true,
    error: null
})

export const fetchUpdatesSuccess = data => ({
    type: UPDATES_FETCH_SUCCESS,
    loading: false,
    error: null,
    data
})

export const fetchUpdatesFailed = () => ({
    type: UPDATES_FETCH_FAILED,
    loading: false,
    error: true
})
