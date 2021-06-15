import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Routes } from './routing';
import { Home, Login, Register } from '../pages';

const RoutesContainer: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.HOME} component={Home} />
        <Route path={Routes.LOGIN} component={Login} />
        <Route path={Routes.REGISTER} component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export { Routes };
export default RoutesContainer;
