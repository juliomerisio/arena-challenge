import MockAdapter from 'axios-mock-adapter';
import faker from 'faker';
import { runSaga } from 'redux-saga';

import api from '~/services/api';
import {
  getRepositorySuccess,
  getPullsSuccess,
} from '~/store/modules/repository/actions';
import {
  fetchRepositories,
  fetchPulls,
} from '~/store/modules/repository/sagas';

const apiMock = new MockAdapter(api);

describe('Respository saga', () => {
  it('should be able to fetch repositories', async () => {
    const dispatch = jest.fn();

    apiMock
      .onGet('search/repositories?q=language:Javascript&sort=stars&page=1')
      .reply(200, { items: ['Data'] });
    await runSaga({ dispatch }, fetchRepositories).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getRepositorySuccess(['Data']));
  });

  it('should be able to fetch pullrequests', async () => {
    const dispatch = jest.fn();

    const payload = {
      name: faker.lorem.words(),
      login: faker.lorem.words(),
    };

    apiMock
      .onGet(`repos/${payload.name}/${payload.login}/pulls`)
      .reply(200, ['Data']);
    await runSaga({ dispatch }, fetchPulls, { payload }).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getPullsSuccess(['Data']));
  });
});
