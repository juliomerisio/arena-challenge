import * as Repositories from '~/store/modules/repository/actions';
import reducer, { INITIAL_STATE } from '~/store/modules/repository/reducer';

describe('Repository reducer', () => {
  it('DEFAULT', () => {
    const state = reducer(undefined, {});
    expect(state).toStrictEqual(INITIAL_STATE);
  });
  it('@repository/GET_REPO_SUCCESS', () => {
    const state = reducer(
      INITIAL_STATE,
      Repositories.getRepositorySuccess({
        id: 1,
        name: 'Julio',
        description: 'Description',
        full_name: 'Julio Cezar Merisio',
        forks_count: 123123,
        stargazers_count: 334234,
        owner: {
          avatar_url:
            'https://avatars2.githubusercontent.com/u/48305450?s=400&u=ec16d51be451a72c597664881d72c1a1ba875809&v=4',
          login: 'juliomerisio',
        },
      })
    );

    expect(state.repositories).toStrictEqual({
      id: 1,
      name: 'Julio',
      description: 'Description',
      full_name: 'Julio Cezar Merisio',
      forks_count: 123123,
      stargazers_count: 334234,
      owner: {
        avatar_url:
          'https://avatars2.githubusercontent.com/u/48305450?s=400&u=ec16d51be451a72c597664881d72c1a1ba875809&v=4',
        login: 'juliomerisio',
      },
    });
  });
  it('@repository/GET_PULLS_SUCCESS', () => {
    const state = reducer(
      INITIAL_STATE,
      Repositories.getPullsSuccess({
        id: 1,
        title: 'nice pull',
        url: '',
        created_at: '2019-10-16T20:00:00.000Z',
        body: 'abc',
        user: {
          creator: 'Julio Merisio',
          avatar:
            'https://avatars2.githubusercontent.com/u/48305450?s=400&u=ec16d51be451a72c597664881d72c1a1ba875809&v=4',
        },
      })
    );

    expect(state.pullrequests).toStrictEqual({
      id: 1,
      title: 'nice pull',
      url: '',
      created_at: '2019-10-16T20:00:00.000Z',
      body: 'abc',
      user: {
        creator: 'Julio Merisio',
        avatar:
          'https://avatars2.githubusercontent.com/u/48305450?s=400&u=ec16d51be451a72c597664881d72c1a1ba875809&v=4',
      },
    });
  });
});
