import React from "react";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { AccountCircle as AccountCircleIcon } from "@material-ui/icons";

const PerfilMenu = () => {
  const [anchorElPerfil, setAnchorElPerfil] = React.useState(null);
  const isMenuPerfilOpen = Boolean(anchorElPerfil);

  const handleProfileMenuOpen = (event) => {
    setAnchorElPerfil(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorElPerfil(null);
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
      <MenuItem>Perfil</MenuItem>
      <MenuItem>Configurações da conta</MenuItem>
      <MenuItem>Sair</MenuItem>
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
