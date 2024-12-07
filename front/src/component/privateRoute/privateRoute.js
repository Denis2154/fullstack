import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../authContext/authContext";

const PrivateRoute = ({component: Component, ...rest}) => {
  const {state} = useAuth();
  return (
    <Route
    {...rest}
    render={(props) => state.isAuthenticated && state.token ? (
        <Component {...props} />
      ): (
        <Redirect to="/login" />
      )
    }
    />
  );
};

export default PrivateRoute;
