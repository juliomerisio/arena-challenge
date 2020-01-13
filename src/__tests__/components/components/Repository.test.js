import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Router } from 'react-router-dom';

import { render } from '@testing-library/react';

import Repository from '~/pages/Home';
import history from '~/services/history';

jest.mock('react-redux');

describe('Repository component', () => {
  it('should render repository list', () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    useSelector.mockImplementation(cb =>
      cb({
        repository: {
          repositories: [
            {
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
            },
          ],
        },
      })
    );
    const { getByTestId } = render(
      <Router history={history}>
        <Repository />
      </Router>
    );
    expect(dispatch).toHaveBeenCalled();
    expect(getByTestId('repository-list')).toBeTruthy();
  });
  it('should render repository list', () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    useSelector.mockImplementation(cb =>
      cb({
        repository: {
          loading: true,
        },
      })
    );
    const { getByTestId } = render(
      <Router history={history}>
        <Repository />
      </Router>
    );
    expect(dispatch).toHaveBeenCalled();
    expect(getByTestId('loading')).toBeTruthy();
  });
});
