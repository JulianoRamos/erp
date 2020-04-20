import {
  empresaIndex,
  empresaOne,
  empresaCreate,
  empresaUpdate,
  empresaDelete,
} from "../store/actions/empresa";

import { getToken } from "./utils/auth";
import api from "./api";

export default class EmpresaApi {
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

  static empresaOne(id) {
    const token = getToken();
    return (dispatch) => {
      dispatch(empresaOne({}));
      api
        .get(`/empresa/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => response.data)
        .then((empresa) => {
          dispatch(empresaOne(empresa));
          return empresa;
        });
    };
  }

  static empresaCreate(data) {
    const token = getToken();
    return (dispatch) => {
      dispatch(empresaCreate({}));
      api
        .post("/empresa/", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => response.data)
        .then((empresa) => {
          dispatch(empresaCreate(empresa));
          return empresa;
        });
    };
  }

  static empresaUpdate(data, id) {
    const token = getToken();
    return (dispatch) => {
      dispatch(empresaUpdate({}));
      api
        .put(`/empresa/${id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => response.data)
        .then((empresa) => {
          dispatch(empresaUpdate(empresa));
          return empresa;
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
          dispatch(empresaDelete(data, id));
          return id;
        });
    };
  }
}
