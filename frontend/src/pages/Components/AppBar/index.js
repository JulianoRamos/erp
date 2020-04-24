import React from "react";

import { connect } from "react-redux";

import clsx from "clsx";
import { AppBar, Toolbar } from "@material-ui/core";

import Menu from "./Menu";
import TituloMenu from "./TituloMenu";
import Pesquisar from "./Pesquisar";
import DashboardMenu from "./DashboardMenu";
import NotificacoesMenu from "./NotificacoesMenu";
import ConfiguracoesMenu from "./ConfiguracoesMenu";
import PerfilMenu from "./PerfilMenu";
import DrawerMenu from "./DrawerMenu";

import useStyles from "./styles";

const MyAppBar = ({ open }) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Menu />
          <TituloMenu />
          <Pesquisar />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <DashboardMenu />
            <NotificacoesMenu />
            <ConfiguracoesMenu />
            <PerfilMenu />
          </div>
        </Toolbar>
      </AppBar>
      <DrawerMenu />
    </div>
  );
};

const mapStateToProps = (state) => ({
  open: state.menu.open,
});

const mapDispatchToProps = (dispatch) => ({
  updateMenuFulfiled: dispatch.menu.updateMenuFulfiled,
});

export default connect(mapStateToProps, mapDispatchToProps)(MyAppBar);
