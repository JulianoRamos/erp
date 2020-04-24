import React from "react";

import { connect } from "react-redux";

import clsx from "clsx";
import { IconButton } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

import useStyles from "./styles";

const Menu = ({ open, updateMenuFulfiled }) => {
  const classes = useStyles();
  return (
    <IconButton
      onClick={() => updateMenuFulfiled(true)}
      color="inherit"
      edge="start"
      className={clsx(classes.menuButton, {
        [classes.hide]: open,
      })}
    >
      <MenuIcon />
    </IconButton>
  );
};

const mapStateToProps = (state) => ({
  open: state.menu.open,
});

const mapDispatchToProps = (dispatch) => ({
  updateMenuFulfiled: dispatch.menu.updateMenuFulfiled,
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
