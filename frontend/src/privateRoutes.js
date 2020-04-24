import React from "react";
import { Route, Redirect } from "react-router-dom";

import { isAuthenticated } from "./utils/token";

import Home from "./pages/Home";

const PrivateRoutes = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      return isAuthenticated() ? (
        <Home props={props} component={Component} />
      ) : (
        <Redirect
          to={{ pathname: "/logon", state: { from: props.location } }}
        />
      );
    }}
  />
);

export default PrivateRoutes;
