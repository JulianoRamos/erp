import React, { useState, useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
// import { useHistory, useParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  AppBar,
  Tabs,
  Tab,
  CardActions,
  Button,
  TextField,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  MenuItem,
} from "@material-ui/core";
import { CloudUpload as CloudUploadIcon } from "@material-ui/icons";

import { connect } from "react-redux";

import SwipeableViews from "react-swipeable-views";

import EmpresaFormApi from "./../../services/empresaFormApi";

import TabPanel from "./../Components/TabPanel";

import useStyles from "./styles";

import { Formik } from "formik";
import * as Yup from "yup";

const EmpresaForm = ({ index, initial, load, create, update }) => {
  const classes = useStyles();
  const theme = useTheme();
  // const history = useHistory();
  const { id } = useParams();

  const [valueTabs, setValueTabs] = useState(0);

  useEffect(() => {
    if (id) {
      load(id);
    }
  }, [load, id]);

  const handleChangeTabs = (event, newValue) => {
    setValueTabs(newValue);
  };

  const handleChangeIndex = (index) => {
    setValueTabs(index);
  };

  // const handleOnClickCancelar = (e) => {
  //   e.preventDefault();
  //   history.push("/empresa");
  // };

  return (
    <Card variant="outlined">
      <Formik
        initialValues={{
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
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(true);
          // if (id) {
          //   await update(data, id);
          // } else {
          //   await create(data);
          // }
        }}
        validationSchema={Yup.object().shape({
          razaoSocial: Yup.string().required("O campo é obrigatório."),
          nomeFantasia: Yup.string().required("O campo é obrigatório."),
          email: Yup.string().email("Digite um email válido."),
        })}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <CardContent>
                <CardActions>
                  <Typography color="textSecondary" variant="h5" gutterBottom>
                    {id ? "Editar" : "Adicionar"} empresa
                  </Typography>
                  <div className={classes.grow} />
                  <Button
                    onClick={handleReset}
                    disabled={!dirty || isSubmitting}
                    color="primary"
                    size="small"
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    color="primary"
                    size="small"
                    disabled={isSubmitting}
                  >
                    Salvar
                  </Button>
                </CardActions>
                <AppBar position="static" color="default" variant="outlined">
                  <Tabs
                    value={valueTabs}
                    onChange={handleChangeTabs}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                  >
                    <Tab label="Básico" />
                    <Tab label="Endereço" />
                    <Tab label="Fiscal" />
                  </Tabs>
                </AppBar>
                <SwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={valueTabs}
                  onChangeIndex={handleChangeIndex}
                >
                  <TabPanel value={valueTabs} index={0} dir={theme.direction}>
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
                    <GridList cellHeight={180} className={classes.gridList}>
                      <GridListTile>
                        <img
                          src="https://www.terramarear.info/wp-content/uploads/2019/08/default.jpg"
                          alt="titulo"
                        />
                        <GridListTileBar
                          title="Carregar"
                          actionIcon={
                            <IconButton
                              aria-label={`info about Titulo`}
                              className={classes.icon}
                            >
                              <CloudUploadIcon />
                            </IconButton>
                          }
                        />
                      </GridListTile>
                    </GridList>
                  </TabPanel>
                  <TabPanel value={valueTabs} index={1} dir={theme.direction}>
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
                  </TabPanel>
                  <TabPanel value={valueTabs} index={2} dir={theme.direction}>
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
                  </TabPanel>
                </SwipeableViews>
              </CardContent>
            </form>
          );
        }}
      </Formik>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  index: state.empresaForm.index,
});

const mapDispatchToProps = (dispatch) => {
  return {
    initial: () => {
      dispatch(EmpresaFormApi.empresaInitial());
    },
    load: (id) => {
      dispatch(EmpresaFormApi.empresaIndex(id));
    },
    create: (data) => {
      dispatch(EmpresaFormApi.empresaCreate(data));
    },
    update: (data, id) => {
      dispatch(EmpresaFormApi.empresaUpdate(data, id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmpresaForm);
