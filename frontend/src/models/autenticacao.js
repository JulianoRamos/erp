import { client } from "../client/client";

import { login, config, formData } from "./../utils/token";

const statusCodeResponses = (status) => {
  switch (status) {
    case 200:
      return "Sucesso.";
    case 400:
      return "Endereço de e-mail e/ou senha incorreta.";
    case 401:
      return "Endereço de e-mail e/ou senha incorreta.";
    default:
      break;
  }
};

const url = "/auth/oauth/token";

const autenticacao = {
  state: {
    autenticacao: {},
    loading: false,
    errors: {},
    redirect: false,
  },

  reducers: {
    newAutenticacao: (state) => {
      return {
        ...state,
        autenticacao: {},
      };
    },

    fetchAutenticacaoFulfiled: (state, payload) => {
      login(payload.access_token);
      return {
        ...state,
        autenticacao: payload,
        errors: {},
        loading: false,
        redirect: true,
      };
    },

    fetchAutenticacaoPending: (state) => {
      return {
        ...state,
        loading: true,
        autenticacao: {},
      };
    },

    fetchAutenticacaoRejected: (state, response) => {
      const errors = {
        global: statusCodeResponses(response.status),
      };
      return {
        ...state,
        errors: errors,
        loading: false,
      };
    },
  },

  effects: (dispatch) => ({
    fetchAutenticacao(payload) {
      dispatch.autenticacao.fetchAutenticacaoPending();
      const data = formData(payload.username, payload.password);
      return client
        .post(url, data, config)
        .then((res) => {
          dispatch.autenticacao.fetchAutenticacaoFulfiled(res.data);
        })
        .catch((err) => {
          dispatch.autenticacao.fetchAutenticacaoRejected(err.response);
        });
    },
  }),
};

export default autenticacao;
