import { UPDATES_FETCH_FAILED, UPDATES_FETCH_SUCCESS } from "./action-types";

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
