import {
  empresaIndex,
  empresaCreate,
  empresaUpdate,
  empresaDelete,
} from "../store/actions/empresa";

export default class EmpresaApi {
  static empresaIndex() {
    return empresaIndex([{ id: 2 }]);

    // return (dispatch) => {
    //   dispatch(linearqueryActive(true));
    //   const token = getToken();
    //   api
    //     .get("/empresa/listar", { headers: { Authentication: `${token}` } })
    //     .then((response) => response.data)
    //     .then((empresas) => {
    //       dispatch(empresaListar(empresas));
    //       dispatch(linearqueryActive(false));
    //       return empresas;
    //     });
    // };
  }

  static empresaCreate() {
    return empresaCreate({ id: 3 });

    // return (dispatch) => {
    //   dispatch(linearqueryActive(true));
    //   const token = getToken();
    //   api
    //     .get("/empresa/listar", { headers: { Authentication: `${token}` } })
    //     .then((response) => response.data)
    //     .then((empresas) => {
    //       dispatch(empresaListar(empresas));
    //       dispatch(linearqueryActive(false));
    //       return empresas;
    //     });
    // };
  }

  static empresaUpdate() {
    return empresaUpdate({ id: 2 });

    // return (dispatch) => {
    //   dispatch(linearqueryActive(true));
    //   const token = getToken();
    //   api
    //     .get("/empresa/listar", { headers: { Authentication: `${token}` } })
    //     .then((response) => response.data)
    //     .then((empresas) => {
    //       dispatch(empresaListar(empresas));
    //       dispatch(linearqueryActive(false));
    //       return empresas;
    //     });
    // };
  }

  static empresaDelete(index, id) {
    return empresaDelete([{ id: 1 }], 2);

    // return (dispatch) => {
    //   dispatch(linearqueryActive(true));
    //   const token = getToken();
    //   api
    //     .get("/empresa/listar", { headers: { Authentication: `${token}` } })
    //     .then((response) => response.data)
    //     .then((empresas) => {
    //       dispatch(empresaListar(empresas));
    //       dispatch(linearqueryActive(false));
    //       return empresas;
    //     });
    // };
  }
}
