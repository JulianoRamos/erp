import React from "react";

import MyAppBar from "./../Components/AppBar";
import Main from "./../Components/Main";

import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MyAppBar />
      <Main />
    </div>
  );
};

export default Home;
