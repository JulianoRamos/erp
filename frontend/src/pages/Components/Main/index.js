import React from "react";
import { Route } from "react-router-dom";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as Actions from "./../../../store/actions/main";

import useStyles from "./styles";

const Main = ({ props, component }) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Route {...props} component={component} />
    </main>
  );
};

const mapStateToProps = (state) => ({
  props: state.main.props,
  component: state.main.component,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
