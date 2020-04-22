export const EMPRESA_INDEX = "EMPRESA_INDEX";
export const EMPRESA_CREATE = "EMPRESA_CREATE";
export const EMPRESA_UPDATE = "EMPRESA_UPDATE";
export const EMPRESA_INITIAL = "EMPRESA_INITIAL";

export const empresaIndex = (index) => {
  return {
    type: EMPRESA_INDEX,
    index,
  };
};

export const empresaCreate = (create) => {
  return {
    type: EMPRESA_CREATE,
    create,
  };
};

export const empresaUpdate = (update) => {
  return {
    type: EMPRESA_UPDATE,
    update,
  };
};

export const empresaInitial = () => {
  return {
    type: EMPRESA_INITIAL,
  };
};
