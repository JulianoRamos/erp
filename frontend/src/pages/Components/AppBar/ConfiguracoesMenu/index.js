import React from "react";

import { IconButton, Menu } from "@material-ui/core";
import { Settings as SettingsIcon } from "@material-ui/icons";

import MyMenuItem from "./../MenuItem";

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
      <MyMenuItem
        to="/empresa"
        tooltip="Gerencie suas configurações gerais e muito mais."
        onClick={handleSettingsMenuClose}
      >
        Empresa
      </MyMenuItem>
      <MyMenuItem
        to="/gerenciamento-de-usuarios"
        tooltip="Adicione usuários e grupos e gerencie pedidos de acesso."
        onClick={handleSettingsMenuClose}
      >
        Gerenciamento de usuários
      </MyMenuItem>
      <MyMenuItem
        to="/cobranca"
        tooltip="Atualize seus dados de cobrança, gerencie suas assinaturas e muito mais."
        onClick={handleSettingsMenuClose}
      >
        Cobrança
      </MyMenuItem>
      <MyMenuItem
        to="/sistema"
        tooltip="Gerencie suas configurações gerais, permissões globais, aparência e muito mais."
        onClick={handleSettingsMenuClose}
      >
        Sistema
      </MyMenuItem>
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
