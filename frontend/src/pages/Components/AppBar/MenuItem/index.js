import React from "react";

import { Link } from "react-router-dom";

import { MenuItem, Tooltip } from "@material-ui/core";

import useStyles from "./styles";

const MyMenuItem = ({ to, tooltip, onClick, children }) => {
  const classes = useStyles();
  return (
    <Link to={to} className={classes.tooltip}>
      <Tooltip title={tooltip}>
        <MenuItem onClick={onClick}>{children}</MenuItem>
      </Tooltip>
    </Link>
  );
};

export default MyMenuItem;
