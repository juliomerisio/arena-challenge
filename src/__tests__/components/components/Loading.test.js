import React from 'react';
import { Router } from 'react-router-dom';

import { render } from '@testing-library/react';

import Loading from '~/components/Loading';
import history from '~/services/history';

jest.mock('react-redux');

describe('Loading component', () => {
  it('should render repository list', () => {
    const { getByTestId } = render(
      <Router history={history}>
        <Loading />
      </Router>
    );
    expect(getByTestId('loading')).toBeTruthy();
  });
});
