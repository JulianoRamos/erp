export const EMPRESA_INDEX = "EMPRESA_INDEX";
export const EMPRESA_DELETE = "EMPRESA_DELETE";

export function empresaIndex(index) {
  return {
    type: EMPRESA_INDEX,
    index,
  };
}

export function empresaDelete(index) {
  return {
    type: EMPRESA_DELETE,
    index,
  };
}
