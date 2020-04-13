const INITIAL_STATE = {
  props: "",
  component: {},
};

export default function main(state = INITIAL_STATE, action) {
  if (action.type === "TOGGLE_MAIN") {
    return {
      ...state,
      props: action.props,
      component: action.component,
    };
  }
  return state;
}
