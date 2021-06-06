import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { isAuth } from '../redux/auth/selectors';

const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...routeProps
}) => {
  // console.log(Component);
  return (
    <Route
      {...routeProps}
      render={props => {
        // console.log(props);
        return isAuthenticated ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};

const mapStateToProps = store => ({ isAuthenticated: isAuth(store) });

export default connect(mapStateToProps)(PrivateRoute);
