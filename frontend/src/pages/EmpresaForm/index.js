import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import EmpresaForm from "../Components/EmpresaForm";

class EmpresaFormPage extends Component {
  componentDidMount = () => {
    const { id } = this.props.match.params;
    if (id) {
      this.props.fetchEmpresa(id);
    } else {
      this.props.newEmpresa();
    }
  };

  render() {
    return (
      <div>
        {this.props.redirect ? (
          <Redirect to="/empresa" />
        ) : (
          <EmpresaForm
            empresa={this.props.empresa}
            loading={this.props.loading}
            saveEmpresa={this.props.saveEmpresa}
            updateEmpresa={this.props.updateEmpresa}
            onSubmit={this.submit}
            errors={this.props.errors}
            redirect={this.props.redirect}
            cancelForm={this.props.cancelForm}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  empresa: state.empresa.empresa,
  loading: state.empresa.loading,
  errors: state.empresa.errors,
  redirect: state.empresa.redirect,
});

const mapDispatchToProps = (dispatch) => ({
  saveEmpresa: dispatch.empresa.saveEmpresa,
  fetchEmpresa: dispatch.empresa.fetchEmpresa,
  updateEmpresa: dispatch.empresa.updateEmpresa,
  newEmpresa: dispatch.empresa.newEmpresa,
  cancelForm: dispatch.empresa.cancelForm,
});

export default connect(mapStateToProps, mapDispatchToProps)(EmpresaFormPage);
