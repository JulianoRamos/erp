const menu = {
  state: {
    open: false,
  },

  reducers: {
    newMenu: (state) => {
      return {
        ...state,
        open: false,
      };
    },

    updateMenuFulfiled: (state, open) => {
      return {
        ...state,
        open,
      };
    },
  },

  effects: (dispatch) => ({
    updateMenu(open) {
      dispatch.privaRoutes.updateMenuFulfiled(open);
    },
  }),
};

export default menu;
