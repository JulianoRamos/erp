import React from "react";
import { IconButton, Menu } from "@material-ui/core";
import { AccountCircle as AccountCircleIcon } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

import { logout } from "./../../../../services/auth";

import MyMenuItem from "./../MenuItem";

const PerfilMenu = () => {
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
      <MyMenuItem
        to="/perfil"
        tooltip="Atualize seus dados pessoais, visualize seu perfil e muito mais."
        onClick={handleProfileMenuClose}
      >
        Perfil
      </MyMenuItem>
      <MyMenuItem
        to="/configuracoes-da-conta"
        tooltip="Gerencie suas configurações da conta e muito mais."
        onClick={handleProfileMenuClose}
      >
        Configurações da conta
      </MyMenuItem>
      <MyMenuItem
        to="/"
        tooltip="Sair do sistema."
        onClick={handleProfileMenuSair}
      >
        Sair
      </MyMenuItem>
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
