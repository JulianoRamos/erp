import React from "react";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { Settings as SettingsIcon } from "@material-ui/icons";

const ConfiguracoesMenu = () => {
  const [anchorElConfiguracao, setAnchorElConfiguracao] = React.useState(null);
  const isMenuConfiguracaoOpen = Boolean(anchorElConfiguracao);

  const handleSettingsMenuOpen = (event) => {
    setAnchorElConfiguracao(event.currentTarget);
  };

  const handleSettingsMenuClose = () => {
    setAnchorElConfiguracao(null);
  };

  const menuIdConfiguracao = "primary-search-settings-menu";
  const renderMenuConfiguracao = (
    <Menu
      anchorEl={anchorElConfiguracao}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuIdConfiguracao}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuConfiguracaoOpen}
      onClose={handleSettingsMenuClose}
    >
      <MenuItem>Gerenciamento de usuários</MenuItem>
      <MenuItem>Cobrança</MenuItem>
      <MenuItem>Sistema</MenuItem>
    </Menu>
  );

  return (
    <div>
      <IconButton
        aria-controls={menuIdConfiguracao}
        aria-haspopup="true"
        onClick={handleSettingsMenuOpen}
        color="inherit"
      >
        <SettingsIcon />
      </IconButton>
      {renderMenuConfiguracao}
    </div>
  );
};

export default ConfiguracoesMenu;
