import React from "react";
import {
  IconButton,
  Menu,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  ListSubheader,
  Box,
  Radio,
  Link,
} from "@material-ui/core";
import {
  Notifications as NotificationsIcon,
  ThumbsUpDownOutlined as ThumbsUpDownOutlinedIcon,
  ThumbsUpDown as ThumbsUpDownIcon,
  ThumbUpAltOutlined as ThumbUpAltOutlinedIcon,
  ThumbUp as ThumbUpIcon,
  ThumbDownAltOutlined as ThumbDownAltOutlinedIcon,
  ThumbDown as ThumbDownIcon,
} from "@material-ui/icons";

import useStyles from "./styles";

const NotificacoesMenu = () => {
  const classes = useStyles();

  const [anchorElNotificacoes, setAnchorElNotificacoes] = React.useState(null);
  const isMenuNotificacoesOpen = Boolean(anchorElNotificacoes);
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleNotificationsMenuOpen = (event) => {
    setAnchorElNotificacoes(event.currentTarget);
  };

  const handleNotificationsMenuClose = () => {
    setAnchorElNotificacoes(null);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const menuIdNotificacoes = "primary-search-settings-menu";
  const renderMenuNotificacoes = (
    <Menu
      anchorEl={anchorElNotificacoes}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuIdNotificacoes}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuNotificacoesOpen}
      onClose={handleNotificationsMenuClose}
      PaperProps={{
        style: {
          maxHeight: 48 * 4.5,
          width: "48ch",
        },
      }}
    >
      <List className={classes.root}>
        <ListSubheader>Abril 9, 2020</ListSubheader>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="Alterações na pagina de produtos!"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Produtos
                </Typography>
                {" — Foi removido os seguintes campos da pagina de produtos…"}
                <Link href="#"> Ler mais!</Link>
              </React.Fragment>
            }
          />
        </ListItem>
        <Box component="span" ml={1}>
          <Radio
            checked={selectedValue === "thumbup"}
            onChange={handleChange}
            value="thumbup"
            icon={<ThumbUpAltOutlinedIcon />}
            checkedIcon={<ThumbUpIcon />}
          />
          <Radio
            checked={selectedValue === "thumbupdown"}
            onChange={handleChange}
            value="thumbupdown"
            icon={<ThumbsUpDownOutlinedIcon />}
            checkedIcon={<ThumbsUpDownIcon />}
          />
          <Radio
            checked={selectedValue === "thumbdown"}
            onChange={handleChange}
            value="thumbdown"
            icon={<ThumbDownAltOutlinedIcon />}
            checkedIcon={<ThumbDownIcon />}
          />
        </Box>
        <Divider variant="middle" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </Menu>
  );

  return (
    <div>
      <IconButton
        aria-controls={menuIdNotificacoes}
        aria-haspopup="true"
        onClick={handleNotificationsMenuOpen}
        color="inherit"
      >
        <NotificationsIcon />
      </IconButton>
      {renderMenuNotificacoes}
    </div>
  );
};

export default NotificacoesMenu;
