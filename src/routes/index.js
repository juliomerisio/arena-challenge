import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '~/pages/Home';
import PullRequests from '~/pages/PullRequests';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/pullrequests/:login/:name" exact component={PullRequests} />
    </Switch>
  );
}
