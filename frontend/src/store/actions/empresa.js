export const EMPRESA_INDEX = "EMPRESA_INDEX";
export const EMPRESA_ONE = "EMPRESA_ONE";
export const EMPRESA_CREATE = "EMPRESA_CREATE";
export const EMPRESA_UPDATE = "EMPRESA_UPDATE";
export const EMPRESA_DELETE = "EMPRESA_DELETE";

export function empresaIndex(index) {
  return {
    type: EMPRESA_INDEX,
    index,
  };
}

export function empresaOne(one) {
  return {
    type: EMPRESA_ONE,
    one,
  };
}

export function empresaCreate(create) {
  return {
    type: EMPRESA_CREATE,
    create,
  };
}

export function empresaUpdate(update) {
  return {
    type: EMPRESA_UPDATE,
    update,
  };
}

export function empresaDelete(index, id) {
  return {
    type: EMPRESA_DELETE,
    index,
    id,
  };
}
