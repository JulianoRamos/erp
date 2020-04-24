import React from "react";
import MyTable from "../Table";

export default function EmpresaTable({ empresas, deleteEmpresa }) {
  const title = "Empresa";
  const columns = [
    { title: "Código", field: "id" },
    { title: "Razão Social", field: "razaoSocial" },
    { title: "Nome Fantasia", field: "nomeFantasia" },
    { title: "CNPJ", field: "cnpj" },
    { title: "Inscrição Estadual", field: "inscricaoEstadual" },
    { title: "Telefone", field: "telefone" },
  ];

  return (
    <MyTable
      title={title}
      columns={columns}
      data={empresas}
      del={deleteEmpresa}
    />
  );
}
