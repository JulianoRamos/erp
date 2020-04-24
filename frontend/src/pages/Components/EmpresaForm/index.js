import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  ButtonGroup,
  TextField,
  AppBar,
  Tab,
  Tabs,
  MenuItem,
} from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from "yup";

import MyTabPanel from "./../../../components/TabPanel";
import MyCircularProgress from "./../../../components/CircularProgress";

const defaultFormShape = {
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
  contador: "",
  cnaePrincipal: "",
  regimeTributario: "SN",
};

class EmpresaForm extends Component {
  state = {
    value: 0,
  };

  handleChangeTabs = (event, newValue) => {
    this.setState({ value: newValue });
  };

  handleChangeIndex = (index) => {
    this.setState({ value: index });
  };

  render() {
    const validationSchema = Yup.object().shape({
      razaoSocial: Yup.string()
        .required("O campo é obrigatório.")
        .max(60, "O campo deve ter no máximo 60 caracteres."),
      nomeFantasia: Yup.string()
        .required("O campo é obrigatório.")
        .max(60, "O campo deve ter no máximo 60 caracteres."),
      email: Yup.string().email("Digite um email válido."),
    });

    return (
      <Formik
        initialValues={
          this.props.empresa.razaoSocial ? this.props.empresa : defaultFormShape
        }
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={(values) => {
          if (!values.id) {
            return this.props.saveEmpresa(values);
          } else {
            return this.props.updateEmpresa(values);
          }
        }}
        render={({
          touched,
          errors,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div>
            <MyCircularProgress loading={this.props.loading} />
            <Card variant="outlined">
              <form onSubmit={handleSubmit}>
                <CardHeader
                  title={
                    this.props.empresa.id
                      ? "Editar Empresa"
                      : "Adicionar Empresa"
                  }
                  action={
                    <ButtonGroup color="primary">
                      <Button onClick={this.props.cancelForm}>Cancelar</Button>
                      <Button type="submit">Salvar</Button>
                    </ButtonGroup>
                  }
                />
                <CardContent>
                  <AppBar position="static" color="default" variant="outlined">
                    <Tabs
                      value={this.state.value}
                      onChange={this.handleChangeTabs}
                      indicatorColor="primary"
                      textColor="primary"
                      variant="fullWidth"
                    >
                      <Tab label="Básico" />
                      <Tab label="Endereço" />
                      <Tab label="Fiscal" />
                    </Tabs>
                  </AppBar>
                  <MyTabPanel value={this.state.value} index={0}>
                    <TextField
                      required
                      style={{ marginTop: 8, marginBottom: 8 }}
                      label="Razão Social"
                      variant="outlined"
                      margin="dense"
                      fullWidth
                      name="razaoSocial"
                      value={values.razaoSocial}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        errors.razaoSocial &&
                        touched.razaoSocial &&
                        errors.razaoSocial
                      }
                      error={errors.razaoSocial && touched.razaoSocial}
                    />

                    <TextField
                      required
                      style={{ marginTop: 8, marginBottom: 8 }}
                      label="Nome Fantasia"
                      variant="outlined"
                      margin="dense"
                      fullWidth
                      name="nomeFantasia"
                      value={values.nomeFantasia}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        errors.nomeFantasia &&
                        touched.nomeFantasia &&
                        errors.nomeFantasia
                      }
                      error={errors.nomeFantasia && touched.nomeFantasia}
                    />
                    <TextField
                      label="CNPJ"
                      style={{ marginTop: 8, marginBottom: 8 }}
                      fullWidth
                      margin="dense"
                      variant="outlined"
                      name="cnpj"
                      value={values.cnpj}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <TextField
                      label="Inscrição Estadual (IE)"
                      style={{ marginTop: 8, marginBottom: 8 }}
                      fullWidth
                      margin="dense"
                      variant="outlined"
                      name="inscricaoEstadual"
                      value={values.inscricaoEstadual}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <TextField
                      label="Telefone"
                      style={{ marginTop: 8, marginBottom: 8 }}
                      fullWidth
                      margin="dense"
                      variant="outlined"
                      name="telefone"
                      value={values.telefone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <TextField
                      label="E-mail"
                      style={{ marginTop: 8, marginBottom: 8 }}
                      fullWidth
                      margin="dense"
                      variant="outlined"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={errors.email && touched.email && errors.email}
                      error={errors.email && touched.email}
                    />
                  </MyTabPanel>
                  <MyTabPanel value={this.state.value} index={1}>
                    <TextField
                      label="Cep"
                      style={{ marginTop: 8, marginBottom: 8 }}
                      fullWidth
                      margin="dense"
                      variant="outlined"
                      name="cep"
                      value={values.cep}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <TextField
                      label="Logradouro"
                      style={{ marginTop: 8, marginBottom: 8 }}
                      fullWidth
                      margin="dense"
                      variant="outlined"
                      name="logradouro"
                      value={values.logradouro}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <TextField
                      label="Bairro"
                      style={{ marginTop: 8, marginBottom: 8 }}
                      fullWidth
                      margin="dense"
                      variant="outlined"
                      name="bairro"
                      value={values.bairro}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <TextField
                      label="Número"
                      style={{ marginTop: 8, marginBottom: 8 }}
                      fullWidth
                      margin="dense"
                      variant="outlined"
                      name="numero"
                      value={values.numero}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <TextField
                      label="Municipio"
                      style={{ marginTop: 8, marginBottom: 8 }}
                      fullWidth
                      margin="dense"
                      variant="outlined"
                      name="municipio"
                      value={values.municipio}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <TextField
                      label="Complemento"
                      style={{ marginTop: 8, marginBottom: 8 }}
                      fullWidth
                      margin="dense"
                      variant="outlined"
                      name="complemento"
                      value={values.complemento}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </MyTabPanel>
                  <MyTabPanel value={this.state.value} index={2}>
                    <TextField
                      label="Contador"
                      style={{ marginTop: 8, marginBottom: 8 }}
                      fullWidth
                      margin="dense"
                      variant="outlined"
                      name="contador"
                      value={values.contador}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <TextField
                      label="CNAE Principal"
                      style={{ marginTop: 8, marginBottom: 8 }}
                      fullWidth
                      margin="dense"
                      variant="outlined"
                      name="cnaePrincipal"
                      value={values.cnaePrincipal}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <TextField
                      required
                      select
                      label="Regime Tributário"
                      style={{ marginTop: 8, marginBottom: 8 }}
                      fullWidth
                      margin="dense"
                      variant="outlined"
                      name="regimeTributario"
                      value={values.regimeTributario}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <MenuItem value="SN">Simples Nacional</MenuItem>
                      <MenuItem value="LP">Lucro Presumido</MenuItem>
                      <MenuItem value="LR">Lucro Real</MenuItem>
                    </TextField>
                  </MyTabPanel>
                </CardContent>
              </form>
            </Card>
          </div>
        )}
      />
    );
  }
}

export default EmpresaForm;
