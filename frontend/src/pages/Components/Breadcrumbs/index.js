import React from "react";
import { Breadcrumbs } from "@material-ui/core";

import Link from "./../Link";

const MyBreadcrumbs = ({ routes = [] }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {routes.map((route) => (
        <Link color="inherit" to={route}>
          {route}
        </Link>
      ))}
    </Breadcrumbs>
  );
};

export default MyBreadcrumbs;
