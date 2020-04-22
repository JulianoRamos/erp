import {
  empresaIndex,
  empresaCreate,
  empresaUpdate,
  empresaInitial,
} from "../store/actions/empresaForm";

import { getToken } from "./utils/auth";
import api from "./api";

export default class EmpresaFormApi {
  static empresaIndex(id) {
    const token = getToken();
    return (dispatch) => {
      dispatch(empresaIndex({}));
      api
        .get(`/empresa/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => response.data)
        .then((empresa) => {
          dispatch(empresaIndex(empresa));
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

  static empresaInitial() {
    return (dispatch) => {
      dispatch(empresaInitial());
    };
  }
}
