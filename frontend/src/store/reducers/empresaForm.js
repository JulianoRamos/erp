import {
  EMPRESA_INDEX,
  EMPRESA_CREATE,
  EMPRESA_UPDATE,
  EMPRESA_INITIAL,
} from "./../actions/empresaForm";

const INITIAL_STATE = {
  index: {},
  create: {},
  update: {},
  id: -1,
};

const empresaForm = (state = INITIAL_STATE, action) => {
  if (action.type === EMPRESA_INDEX) {
    return {
      ...state,
      index: action.index,
    };
  } else if (action.type === EMPRESA_CREATE) {
    return {
      ...state,
      create: action.create,
    };
  } else if (action.type === EMPRESA_UPDATE) {
    return {
      ...state,
      update: action.update,
    };
  } else if (action.type === EMPRESA_INITIAL) {
    return {
      state: INITIAL_STATE,
    };
  }
  return state;
};

export default empresaForm;
