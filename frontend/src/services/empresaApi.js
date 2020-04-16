import {
  empresaIndex,
  empresaCreate,
  empresaUpdate,
  empresaDelete,
} from "../store/actions/empresa";

import { getToken } from "./utils/auth";
import api from "./api";

export default class EmpresaApi {
  static empresaIndex() {
    const token = getToken();
    return (dispatch) =>
      api
        .get("/empresa/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => response.data)
        .then((empresas) => {
          dispatch(empresaIndex(empresas));
          return empresas;
        });
  }

  static empresaCreate() {
    const token = getToken();
    return (dispatch) =>
      api
        .post("/empresa/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => response.data)
        .then((empresa) => {
          dispatch(empresaCreate(empresa));
          return empresa;
        });
  }

  static empresaUpdate() {
    const token = getToken();
    return (dispatch) =>
      api
        .put("/empresa/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => response.data)
        .then((empresa) => {
          dispatch(empresaUpdate(empresa));
          return empresa;
        });
  }

  static empresaDelete(index, id) {
    const token = getToken();
    return (dispatch) =>
      api
        .delete(`/empresa/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => response.data)
        .then((id) => {
          dispatch(empresaDelete(index, id));
          return id;
        });
  }
}
