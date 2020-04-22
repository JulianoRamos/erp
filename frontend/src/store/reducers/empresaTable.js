import { EMPRESA_INDEX, EMPRESA_DELETE } from "./../actions/empresaTable";

const TITLE = "Empresa";

const COLUMNS = [
  { title: "Código", field: "id" },
  { title: "Razão Social", field: "razaoSocial" },
  { title: "Nome Fantasia", field: "nomeFantasia" },
  { title: "CNPJ", field: "cnpj" },
  { title: "Inscrição Estadual", field: "inscricaoEstadual" },
  { title: "Telefone", field: "telefone" },
];

const INITIAL_STATE = {
  index: [],
  title: TITLE,
  columns: COLUMNS,
};

export default function empresaTable(state = INITIAL_STATE, action) {
  if (action.type === EMPRESA_INDEX) {
    return {
      ...state,
      index: action.index,
    };
  } else if (action.type === EMPRESA_DELETE) {
    return {
      ...state,
      index: action.index,
    };
  }
  return state;
}
