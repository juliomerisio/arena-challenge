/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
import { toast } from 'react-toastify';

import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';
import { getRepositorySuccess, getPullsSuccess } from './actions';

export function* fetchRepositories() {
  try {
    const response = yield call(
      api.get,
      `search/repositories?q=language:Javascript&sort=stars&page=1`
    );

    yield put(getRepositorySuccess(response.data.items));
  } catch (error) {
    toast.error('Please verify your  connection');
  }
}
export function* fetchMoreRepositories({ payload }) {
  const { page } = payload;
  try {
    const response = yield call(
      api.get,
      `search/repositories?q=language:Javascript&sort=stars&page=${page + 1}`
    );

    yield put(getRepositorySuccess(response.data.items));
  } catch (error) {
    toast.error('Please verify your connection');
  }
}

export function* fetchPulls({ payload }) {
  const { login, name } = payload;
  try {
    const response = yield call(api.get, `/repos/${name}/${login}/pulls`);

    yield put(getPullsSuccess(response.data));
  } catch (error) {
    toast.error('Please verify your database connection');
  }
}
export function* loadMore({ page }) {
  const response = yield call(
    api.get,
    `search/repositories?q=language:Javascript&sort=stars&page=${page + 1}"`
  );

  const { results } = response.data;

  yield put(getPullsSuccess(results));
}

export default all([
  takeLatest('@repository/GET_REPO_REQUEST', fetchRepositories),
  takeLatest('@repository/GET_PULLS_REQUEST', fetchPulls),
  takeLatest('@repository/GET_MOREDATA_REQUEST', fetchMoreRepositories),
]);
