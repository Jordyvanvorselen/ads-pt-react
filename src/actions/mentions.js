import { MENTIONS_FETCH, MENTIONS_FETCH_SUCCESS, MENTIONS_FETCH_FAILED } from "./action-types";

export const fetchMentions = name => ({
    type: MENTIONS_FETCH,
    name,
    loading: true
})

export const fetchMentionsSuccess = data => ({
    type: MENTIONS_FETCH_SUCCESS,
    loading: false,
    error: null,
    data
})

export const fetchMentionsFailed = () => ({
    type: MENTIONS_FETCH_FAILED,
    loading: false,
    error: true
})
