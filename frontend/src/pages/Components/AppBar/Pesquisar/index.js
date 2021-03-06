import React from "react";
import { InputBase } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";

import useStyles from "./styles";

const Pesquisar = () => {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Pesquisar…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
};

export default Pesquisar;
