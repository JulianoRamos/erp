const INITIAL_STATE = {
  index: [],
  create: {},
  update: {},
  id: -1,
};

export default function empresa(state = INITIAL_STATE, action) {
  if (action.type === "EMPRESA_INDEX") {
    return {
      ...state,
      index: action.index,
    };
  } else if (action.type === "EMPRESA_CREATE") {
    return {
      ...state,
      create: action.create,
    };
  } else if (action.type === "EMPRESA_UPDATE") {
    return {
      ...state,
      update: action.update,
    };
  } else if (action.type === "EMPRESA_DELETE") {
    return {
      ...state,
      index: action.index,
      id: action.id,
    };
  }
  return state;
}
