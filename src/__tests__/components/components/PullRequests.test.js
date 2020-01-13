import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Router } from 'react-router-dom';

import { render } from '@testing-library/react';
import faker from 'faker';

import PullRequests from '~/pages/PullRequests';
import history from '~/services/history';

jest.mock('react-redux');

describe('Repository component', () => {
  it('should render pullrequests list', () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    useSelector.mockImplementation(cb =>
      cb({
        repository: {
          pullrequests: [
            {
              id: faker.random.number(),
              title: 'nice pull',
              url: '',
              created_at: '2019-10-16T20:00:00.000Z',
              body: faker.lorem.paragraph(),
              user: {
                creator: faker.lorem.words(),
                avatar:
                  'https://avatars2.githubusercontent.com/u/48305450?s=400&u=ec16d51be451a72c597664881d72c1a1ba875809&v=4',
              },
            },
          ],
        },
      })
    );
    const { getByTestId } = render(
      <Router history={history}>
        <PullRequests />
      </Router>
    );
    expect(dispatch).toHaveBeenCalled();
    expect(getByTestId('pull-list')).toBeTruthy();
  });
  it('should render loading', () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    useSelector.mockImplementation(cb =>
      cb({
        repository: {
          loading: true,
          pullrequests: [
            {
              id: faker.random.number(),
              title: 'nice pull',
              url: '',
              created_at: '2019-10-16T20:00:00.000Z',
              body: faker.lorem.paragraph(),
              user: {
                creator: faker.lorem.words(),
                avatar:
                  'https://avatars2.githubusercontent.com/u/48305450?s=400&u=ec16d51be451a72c597664881d72c1a1ba875809&v=4',
              },
            },
          ],
        },
      })
    );
    const { getByTestId } = render(
      <Router history={history}>
        <PullRequests />
      </Router>
    );
    expect(dispatch).toHaveBeenCalled();
    expect(getByTestId('loading')).toBeTruthy();
  });
});
