import React from "react";
import { Backdrop, CircularProgress } from "@material-ui/core";

import useStyles from "./styles";

const MyCircularProgress = ({ loading }) => {
  const classes = useStyles();
  return (
    <Backdrop className={classes.backdrop} open={loading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default MyCircularProgress;
