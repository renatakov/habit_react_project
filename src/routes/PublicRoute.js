import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { isAuth } from '../redux/auth/selectors';

const PublicRoute = ({
  isAuthenticated,
  restricted,
  component: Component,
  ...routeProps
}) => {
  // console.log(routeProps);
  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticated && restricted ? (
          <Redirect to="/user" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

const mapStateToProps = store => {
  return {
    isAuthenticated: isAuth(store),
  };
};

export default connect(mapStateToProps)(PublicRoute);
