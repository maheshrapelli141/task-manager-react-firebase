import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route 
    {...rest} 
    render={props => (
      rest.user
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )
    } 
  />
)

const mapStateToProps = state => {
  const { user } = state;
  return {
    user
  };
}

export default connect(mapStateToProps)(PrivateRoute);