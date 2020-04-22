import React from "react";

import { Link } from "react-router-dom";

import { MenuItem, Tooltip, IconButton, Menu } from "@material-ui/core";
import { Settings as SettingsIcon } from "@material-ui/icons";

import useStyles from "./styles";

const ConfiguracoesMenu = () => {
  const classes = useStyles();
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
      <Link to="/empresa" className={classes.tooltip}>
        <Tooltip title="Gerencie suas configurações gerais e muito mais.">
          <MenuItem onClick={handleSettingsMenuClose}>Empresa</MenuItem>
        </Tooltip>
      </Link>
      <Link to="/gerenciamento-de-usuarios" className={classes.tooltip}>
        <Tooltip title="Adicione usuários e grupos e gerencie pedidos de acesso.">
          <MenuItem onClick={handleSettingsMenuClose}>
            Gerenciamento de usuários
          </MenuItem>
        </Tooltip>
      </Link>
      <Link to="/cobranca" className={classes.tooltip}>
        <Tooltip title="Atualize seus dados de cobrança, gerencie suas assinaturas e muito mais.">
          <MenuItem onClick={handleSettingsMenuClose}>Cobrança</MenuItem>
        </Tooltip>
      </Link>
      <Link to="/sistema" className={classes.tooltip}>
        <Tooltip title="Gerencie suas configurações gerais, permissões globais, aparência e muito mais.">
          <MenuItem onClick={handleSettingsMenuClose}>Sistema</MenuItem>
        </Tooltip>
      </Link>
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
