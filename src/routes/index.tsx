import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Routes } from './routing';
import { Home, Login, Register } from '../pages';
import AuthContext from '../Context/AuthContext';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const { authenticated } = useContext(AuthContext);
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         authenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to={{ pathname: '/', state: { from: props.location } }} />
//         )}
//     />
//   );
// };

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
