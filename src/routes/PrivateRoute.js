import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { isAuth } from '../redux/auth/selectors';

const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...routeProps
}) => {
  console.log(isAuthenticated);
  return (
    <Route
      {...routeProps}
      render={props => {
        if (isAuthenticated) {
          <Component {...props} />;
        } else {
          <Redirect to="/" />;
        }
      }}
    />
  );
};

const mapStateToProps = store => {
  return {
    isAuthenticated: isAuth(store),
  };
};

export default connect(mapStateToProps)(PrivateRoute);
