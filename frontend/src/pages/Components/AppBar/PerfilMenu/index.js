import React from "react";

import { Link } from "react-router-dom";

import { MenuItem, Tooltip, IconButton, Menu } from "@material-ui/core";
import { AccountCircle as AccountCircleIcon } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

import { logout } from "./../../../../services/utils/auth";

import useStyles from "./styles";

const PerfilMenu = () => {
  const classes = useStyles();
  const history = useHistory();

  const [anchorElPerfil, setAnchorElPerfil] = React.useState(null);
  const isMenuPerfilOpen = Boolean(anchorElPerfil);

  const handleProfileMenuOpen = (event) => {
    setAnchorElPerfil(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorElPerfil(null);
  };

  const handleProfileMenuSair = () => {
    logout();
    history.push("/");
  };

  const menuIdPerfil = "primary-search-account-menu";
  const renderMenuPerfil = (
    <Menu
      anchorEl={anchorElPerfil}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuIdPerfil}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuPerfilOpen}
      onClose={handleProfileMenuClose}
    >
      <Link to="/perfil" className={classes.tooltip}>
        <Tooltip title="Atualize seus dados pessoais, visualize seu perfil e muito mais.">
          <MenuItem onClick={handleProfileMenuClose}>Perfil</MenuItem>
        </Tooltip>
      </Link>
      <Link to="/configuracoes-da-conta" className={classes.tooltip}>
        <Tooltip title="Gerencie suas configurações da conta e muito mais.">
          <MenuItem onClick={handleProfileMenuClose}>
            Configurações da conta
          </MenuItem>
        </Tooltip>
      </Link>
      <Link to="/" className={classes.tooltip}>
        <Tooltip title="Sair do sistema.">
          <MenuItem onClick={handleProfileMenuSair}>Sair</MenuItem>
        </Tooltip>
      </Link>
    </Menu>
  );

  return (
    <div>
      <IconButton
        edge="end"
        aria-controls={menuIdPerfil}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
      >
        <AccountCircleIcon />
      </IconButton>
      {renderMenuPerfil}
    </div>
  );
};

export default PerfilMenu;
