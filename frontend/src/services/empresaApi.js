import { empresaIndex } from "../store/actions/empresa";

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
}
