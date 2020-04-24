import React from "react";

import { useHistory } from "react-router-dom";

import { IconButton } from "@material-ui/core";
import { Dashboard as DashboardIcon } from "@material-ui/icons";

const DashboardMenu = () => {
  const history = useHistory();
  const handlerOnClick = (e) => {
    history.push("/");
  };
  return (
    <IconButton onClick={handlerOnClick} color="inherit">
      <DashboardIcon />
    </IconButton>
  );
};

export default DashboardMenu;
