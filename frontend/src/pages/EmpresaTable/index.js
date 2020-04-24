import React, { Component } from "react";
import { connect } from "react-redux";

import EmpresaTable from "../Components/EmpresaTable";

class EmpresaTablePage extends Component {
  componentDidMount() {
    this.props.fetchEmpresas();
  }

  render() {
    return (
      <EmpresaTable
        empresas={this.props.empresas}
        deleteEmpresa={this.props.deleteEmpresa}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  empresas: state.empresa.empresas,
});

const mapDispatchToProps = (dispatch) => ({
  fetchEmpresas: dispatch.empresa.fetchEmpresas,
  deleteEmpresa: dispatch.empresa.deleteEmpresa,
});
export default connect(mapStateToProps, mapDispatchToProps)(EmpresaTablePage);
