import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import NegaIndex from './Nega/Index';
import NegaNew from './Nega/New';
import NegaEdit from './Nega/Edit';
import Main from './Main';

const history = createBrowserHistory();
const Routes = () =>
  <Router history={history} basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path="/negas/:id/edit" component={NegaEdit} />
      <Route path="/negas/new" component={NegaNew} />
      <Route path="/negas/" component={NegaIndex} />
      <Route path="*" component={Main} />
    </Switch>
  </Router>;

export default Routes;