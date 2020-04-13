const INITIAL_STATE = {
  open: false,
};

export default function course(state = INITIAL_STATE, action) {
  if (action.type === "DRAWER_OPEN") {
    return {
      ...state,
      open: action.open,
    };
  }
  return state;
}
