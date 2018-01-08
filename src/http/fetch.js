export function fetchSaga(actions, url, query) {
  // Check if call contains all three types of paths
  if (!actions.start)
    throw new Error("A start action was not defined for the fetch saga.")
  else if (!actions.success)
    throw new Error("A success action was not defined for the fetch saga.")
}
