const INITIAL_STATE = {
  index: [],
};

export default function empresa(state = INITIAL_STATE, action) {
  if (action.type === "EMPRESA_INDEX") {
    return {
      ...state,
      index: action.index,
    };
  }
  return state;
}
