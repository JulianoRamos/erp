import { client } from "../client/client";

import { getHeaders } from "../utils/token";

const url = "/empresa/municipio";

const municipio = {
  state: {
    municipios: [],
    loading: false,
    errors: {},
    redirect: false,
  },

  reducers: {
    fetchMunicipiosFulfiled: (state, data) => {
      return {
        ...state,
        municipios: data,
        redirect: false,
      };
    },
  },

  effects: (dispatch) => ({
    fetchMunicipios() {
      return client.get(url, getHeaders()).then((res) => {
        dispatch.municipio.fetchMunicipiosFulfiled(res.data);
      });
    },
  }),
};

export default municipio;
