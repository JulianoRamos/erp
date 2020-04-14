export function empresaIndex(index) {
  return {
    type: "EMPRESA_INDEX",
    index,
  };
}

export function empresaCreate(create) {
  return {
    type: "EMPRESA_CREATE",
    create,
  };
}

export function empresaUpdate(update) {
  return {
    type: "EMPRESA_UPDATE",
    update,
  };
}

export function empresaDelete(index, id) {
  return {
    type: "EMPRESA_DELETE",
    index,
    id,
  };
}
