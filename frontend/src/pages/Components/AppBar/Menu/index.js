import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as Actions from "./../../../../store/actions/menu";

import clsx from "clsx";
import { IconButton } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

import useStyles from "./styles";

const Menu = ({ open, handleDrawerOpen }) => {
  const classes = useStyles();
  return (
    <IconButton
      onClick={() => handleDrawerOpen(true)}
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

const mapStateToProps = (state) => ({ open: state.menu.open });

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
