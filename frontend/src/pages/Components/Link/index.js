import React from "react";

import { Link } from "react-router-dom";

import useStyles from "./styles";

const MyLink = ({ to, children }) => {
  const classes = useStyles();
  return (
    <Link to={to} className={classes.tooltip}>
      {children}
    </Link>
  );
};

export default MyLink;
