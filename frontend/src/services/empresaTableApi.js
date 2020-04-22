import { empresaIndex, empresaDelete } from "../store/actions/empresaTable";

import { getToken } from "./utils/auth";
import api from "./api";

export default class EmpresaTableApi {
  static empresaIndex() {
    const token = getToken();
    return (dispatch) => {
      dispatch(empresaIndex([]));
      api
        .get("/empresa/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => response.data)
        .then((empresas) => {
          dispatch(empresaIndex(empresas.content));
          return empresas.content;
        });
    };
  }

  static empresaDelete(data, id) {
    const token = getToken();
    return (dispatch) => {
      dispatch(empresaDelete(-1));
      api
        .delete(`/empresa/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => response.data)
        .then((id) => {
          dispatch(empresaDelete(data));
          return id;
        });
    };
  }
}
