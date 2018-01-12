import { push } from "react-router-redux"

export const navigateDetail = id => push(`/detail?id=${id}`)
