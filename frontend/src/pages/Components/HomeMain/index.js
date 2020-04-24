import React from "react";
import { Route } from "react-router-dom";

import useStyles from "./styles";

const HomeMain = ({ props, component }) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Route {...props} component={component} />
    </main>
  );
};

export default HomeMain;
