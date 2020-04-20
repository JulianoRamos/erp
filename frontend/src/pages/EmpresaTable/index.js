import React from "react";

import { connect } from "react-redux";

import EmpresaApi from "./../../services/empresaApi";

import MyTable from "./../Components/Table";

const TITLE = "Empresa";

const COLUMNS = [
  { title: "Código", field: "id" },
  { title: "Razão Social", field: "razaoSocial" },
  { title: "Nome Fantasia", field: "nomeFantasia" },
  { title: "CNPJ", field: "cnpj" },
  { title: "Inscrição Estadual", field: "inscricaoEstadual" },
  { title: "Telefone", field: "telefone" },
];

const Empresa = ({ load, index, del }) => (
  <MyTable
    title={TITLE}
    columns={COLUMNS}
    load={load}
    index={index}
    del={del}
  />
);

const mapStateToProps = (state) => ({
  index: state.empresa.index,
});

const mapDispatchToProps = (dispatch) => {
  return {
    load: () => {
      dispatch(EmpresaApi.empresaIndex());
    },
    del: (data, id) => {
      dispatch(EmpresaApi.empresaDelete(data, id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Empresa);
