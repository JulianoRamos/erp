import React from "react";

import MyAppBar from "./../Components/AppBar";
import Main from "./../Components/Main";

import useStyles from "./styles";

const Home = ({ props, component }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MyAppBar />
      <Main props={props} component={component} />
    </div>
  );
};

export default Home;
