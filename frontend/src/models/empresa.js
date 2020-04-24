import { client } from "../client/client";

import { getHeaders } from "../utils/token";

const url = "/empresa";

const empresa = {
  state: {
    empresas: [],
    empresa: {},
    loading: false,
    errors: {},
    redirect: false,
  },

  reducers: {
    cancelForm: (state) => {
      return {
        ...state,
        redirect: true,
      };
    },

    fetchEmpresasFulfiled: (state, payload) => {
      return {
        ...state,
        empresas: payload.data || payload,
        redirect: false,
      };
    },

    newEmpresa: (state) => {
      return {
        ...state,
        empresa: {},
      };
    },

    saveEmpresaFulfilled: (state, payload) => {
      return {
        ...state,
        empresas: [...state.empresas, payload],
        errors: {},
        loading: false,
        redirect: true,
      };
    },

    saveEmpresaPending: (state) => {
      return {
        ...state,
        loading: true,
      };
    },

    saveEmpresaRejected: (state, payload) => {
      const { razaoSocial, nomeFantasia } = payload.errors;
      const errors = {
        global: payload.message,
        razaoSocial,
        nomeFantasia,
      };
      return {
        ...state,
        errors: errors,
        loading: false,
      };
    },

    fetchEmpresaFulfiled: (state, payload) => {
      return {
        ...state,
        empresa: payload,
        errors: {},
        loading: false,
        redirect: false,
      };
    },

    updateEmpresaFulfiled: (state, payload) => {
      const empresa = payload;
      return {
        ...state,
        empresas: state.empresas.map((item) =>
          item.id === empresa.id ? empresa : item
        ),
        errors: {},
        loading: false,
        redirect: true,
      };
    },

    updateEmpresaRejected: (state, payload) => {
      const { razaoSocial, nomeFantasia } = payload.errors;
      const errors = {
        global: payload.message,
        razaoSocial,
        nomeFantasia,
      };
      return {
        ...state,
        errors: errors,
        loading: false,
      };
    },

    updateEmpresaPending: (state) => {
      return {
        ...state,
        loading: true,
      };
    },

    fetchEmpresaPending: (state) => {
      return {
        ...state,
        loading: true,
        empresa: {},
      };
    },

    deleteEmpresaFulfiled: (state, id) => {
      return {
        ...state,
        empresas: state.empresas.filter((item) => item.id !== id),
      };
    },
  },

  effects: (dispatch) => ({
    fetchEmpresas() {
      return client.get(url, getHeaders()).then((res) => {
        dispatch.empresa.fetchEmpresasFulfiled(res.data.content);
      });
    },

    fetchEmpresa(id) {
      dispatch.empresa.fetchEmpresaPending();
      return client.get(`${url}/${id}`, getHeaders()).then((res) => {
        dispatch.empresa.fetchEmpresaFulfiled(res.data);
      });
    },

    updateEmpresa(empresa) {
      dispatch.empresa.updateEmpresaPending();
      return client
        .put(`${url}/${empresa.id}`, empresa, getHeaders())
        .then((res) => {
          dispatch.empresa.updateEmpresaFulfiled(res.data);
        })
        .catch((err) => {
          dispatch.empresa.updateEmpresaRejected(err.response.data);
        });
    },

    saveEmpresa(empresa) {
      dispatch.empresa.saveEmpresaPending();
      return client
        .post(url, empresa, getHeaders())
        .then((res) => {
          dispatch.empresa.saveEmpresaFulfilled(res.data);
        })
        .catch((err) => {
          dispatch.empresa.saveEmpresaRejected(err.response.data);
        });
    },

    deleteEmpresa(id) {
      return client.delete(`${url}/${id}`, getHeaders()).then((res) => {
        dispatch.empresa.deleteEmpresaFulfiled(res.data);
      });
    },
  }),
};

export default empresa;
