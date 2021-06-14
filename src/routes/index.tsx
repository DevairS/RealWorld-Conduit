import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Routes } from './routing';
import { Home } from '../pages';

const RoutesContainer: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.HOME} component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export { Routes };
export default RoutesContainer;
