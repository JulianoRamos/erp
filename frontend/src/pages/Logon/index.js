import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";

import LogonForm from "../Components/LogonForm";

class Logon extends Component {
  componentDidMount = () => {
    this.props.newAutenticacao();
  };

  render() {
    return (
      <div>
        {this.props.redirect ? (
          <Redirect to="/" />
        ) : (
          <LogonForm
            loading={this.props.loading}
            fetchAutenticacao={this.props.fetchAutenticacao}
            errors={this.props.errors}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  autenticacao: state.autenticacao.autenticacao,
  loading: state.autenticacao.loading,
  errors: state.autenticacao.errors,
  redirect: state.autenticacao.redirect,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAutenticacao: dispatch.autenticacao.fetchAutenticacao,
  newAutenticacao: dispatch.autenticacao.newAutenticacao,
});

export default connect(mapStateToProps, mapDispatchToProps)(Logon);
