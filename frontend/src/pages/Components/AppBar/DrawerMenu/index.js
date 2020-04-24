import React from "react";

import { connect } from "react-redux";

import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import {
  IconButton,
  Drawer,
  Divider,
  List,
  ListItemIcon,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Inbox as InboxIcon,
} from "@material-ui/icons";

import useStyles from "./styles";

const DrawerMenu = ({ open, updateMenuFulfiled }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={() => updateMenuFulfiled(false)}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button key="Inbox">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
      </List>
    </Drawer>
  );
};

const mapStateToProps = (state) => ({
  open: state.menu.open,
});

const mapDispatchToProps = (dispatch) => ({
  updateMenuFulfiled: dispatch.menu.updateMenuFulfiled,
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerMenu);
