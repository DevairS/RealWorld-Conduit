import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Routes } from './routing';
import { Home, Login, Register, Settings, Editor } from '../pages';
import AuthContext from '../Context/AuthContext';

const PrivateRoute = ({ component, ...rest }: any): any => {
  const { authenticated } = useContext(AuthContext);

  const routerComponent = (props: any): any =>
    authenticated ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    );

  return <Route {...rest} render={routerComponent} />;
};

const RoutesContainer: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.HOME} component={Home} />
        <Route path={Routes.LOGIN} component={Login} />
        <Route path={Routes.REGISTER} component={Register} />
        <PrivateRoute path={Routes.EDITOR} component={Editor} />
        <PrivateRoute path={Routes.SETTINGS} component={Settings} />
      </Switch>
    </BrowserRouter>
  );
};

export { Routes };
export default RoutesContainer;
