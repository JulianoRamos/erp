import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import MyTable from "./../Components/Table";

// import { Container } from './styles';

const INICIAL_STATE = {
  columns: [
    { title: "Código", field: "id" },
    { title: "Razão Social", field: "razaoSocial" },
    { title: "Nome Fantasia", field: "nomeFantasia" },
    { title: "CNPJ", field: "cnpj" },
    { title: "Inscrição Estadual", field: "inscricaoEstadual" },
    { title: "Telefone", field: "telefone" },
  ],
  data: [],
  empresa: {
    id: null,
    razaoSocial: "",
    nomeFantasia: "",
    cnpj: "",
    inscricaoEstadual: "",
    telefone: "",
    email: "",
    cep: "",
    logradouro: "",
    bairro: "",
    numero: "",
    complemento: "",
    contador: null,
    cnaePrincipal: "",
    regimeTributario: "",
  },
  id: -1,
};

const Empresa = () => (
  <MyTable
    title="Empresa"
    columns={INICIAL_STATE.columns}
    data={INICIAL_STATE.data}
    filtering={false}
  />
);

const mapStateToProps = (state) => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Empresa);
