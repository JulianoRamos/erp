import React from "react";

import { IconButton } from "@material-ui/core";
import { Dashboard as DashboardIcon } from "@material-ui/icons";

import MyLink from "./../../Link";

const DashboardMenu = () => {
  return (
    <MyLink to="/">
      <IconButton color="inherit">
        <DashboardIcon />
      </IconButton>
    </MyLink>
  );
};

export default DashboardMenu;
