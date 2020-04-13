import React from "react";
import { Route, Redirect } from "react-router-dom";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as Actions from "./store/actions/main";

import { isAuthenticated } from "./services/auth";

import Home from "./pages/Home";

const PrivateRoutes = ({ component: Component, toggleMain, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      toggleMain(props, Component);
      return isAuthenticated() ? (
        <Home />
      ) : (
        <Redirect
          to={{ pathname: "/logon", state: { from: props.location } }}
        />
      );
    }}
  />
);

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoutes);
