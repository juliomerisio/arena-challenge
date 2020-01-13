export function getRepositoryRequest() {
  return {
    type: '@repository/GET_REPO_REQUEST',
  };
}

export function getRepositorySuccess(items) {
  return {
    type: '@repository/GET_REPO_SUCCESS',
    payload: { items },
  };
}
export function getPullsRequest({ name, login }) {
  return {
    type: '@repository/GET_PULLS_REQUEST',
    payload: { name, login },
  };
}
export function getMoreData({ page }) {
  return {
    type: '@repository/GET_MOREDATA_REQUEST',
    payload: { page },
  };
}
export function getMoreDataSuccess({ items }) {
  return {
    type: '@repository/GET_MOREDATA_SUCCESS',
    payload: { items },
  };
}
export function getPullsSuccess(items) {
  return {
    type: '@repository/GET_PULLS_SUCCESS',
    payload: { items },
  };
}
