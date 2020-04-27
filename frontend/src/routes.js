import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PrivateRoutes from "./privateRoutes";

import Logon from "./pages/Logon";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";

import EmpresaTablePage from "./pages/EmpresaTable";
import EmpresaFormPage from "./pages/EmpresaForm";

import MyMunicipio from "./components/Municipio";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoutes exact path="/" component={MyMunicipio} />
        <PrivateRoutes exact path="/empresa" component={EmpresaTablePage} />
        <PrivateRoutes
          exact
          path="/empresa/adicionar"
          component={EmpresaFormPage}
        />
        <PrivateRoutes
          exact
          path="/empresa/editar/:id"
          component={EmpresaFormPage}
        />

        <PrivateRoutes
          exact
          path="/gerenciamento-de-usuarios"
          component={() => <div>Gerenciamento de usuários</div>}
        />
        <PrivateRoutes
          exact
          path="/cobranca"
          component={() => <div>Cobrança</div>}
        />
        <PrivateRoutes
          exact
          path="/sistema"
          component={() => <div>Sistema</div>}
        />
        <PrivateRoutes
          exact
          path="/perfil"
          component={() => <div>Perfil</div>}
        />
        <PrivateRoutes
          exact
          path="/configuracoes-da-conta"
          component={() => <div>Configuracoes da conta</div>}
        />

        <Route exact path="/logon" component={Logon} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/resetpassword" component={ResetPassword} />
        <Route path="error" component={() => <h1>Global error</h1>} />
        <Route path="*" component={() => <h1>Not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
