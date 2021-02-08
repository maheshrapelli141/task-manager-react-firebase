import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './HomePage';
import TaskPage from './TaskPage';
import ReportPage from './ReportPage';
import PrivateRoute from './PrivateRoute';

const MainRoutes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <PrivateRoute path="/task" component={TaskPage} />
    <PrivateRoute path="/report" component={ReportPage} />
    <Redirect to="/" />
  </Switch>
);

export default MainRoutes;
