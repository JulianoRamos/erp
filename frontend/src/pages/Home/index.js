import React from "react";

import MyAppBar from "./../Components/AppBar";
import HomeMain from "./../Components/HomeMain";

import useStyles from "./styles";

const Home = ({ props, component }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MyAppBar />
      <HomeMain props={props} component={component} />
    </div>
  );
};

export default Home;
