import React, { useState, useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import { useHistory, useParams } from "react-router-dom";
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
} from "@material-ui/core";
import { CloudUpload as CloudUploadIcon } from "@material-ui/icons";

import { connect } from "react-redux";

import SwipeableViews from "react-swipeable-views";

import EmpresaApi from "./../../services/empresaApi";

import TabPanel from "./../Components/TabPanel";

import useStyles from "./styles";

const a11yProps = (index) => {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
};

const EmpresaForm = ({ one, load, create, update }) => {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const { id } = useParams();

  const [razaoSocial, setRazaoSocial] = useState("");
  const [nomeFantasia, setNomeFantasia] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [inscricaoEstadual, setInscricaoEstadual] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [contador, setContador] = useState("");
  const [cnaePrincipal, setCnaePrincipal] = useState("");
  const [regimeTributario, setRegimeTributario] = useState("");

  const [valueTabs, setValueTabs] = useState(0);

  useEffect(() => {
    load(id);
  }, [id]);

  useEffect(() => {
    setRazaoSocial(one.razaoSocial);
    setNomeFantasia(one.nomeFantasia);
    setCnpj(one.cnpj);
    setInscricaoEstadual(one.inscricaoEstadual);
    setTelefone(one.telefone);
    setEmail(one.email);
    setCep(one.cep);
    setLogradouro(one.logradouro);
    setBairro(one.bairro);
    setNumero(one.numero);
    setComplemento(one.complemento);
    setContador(one.contador);
    setCnaePrincipal(one.cnaePrincipal);
    setRegimeTributario(one.regimeTributario);
  }, [one]);

  const handleChangeTabs = (event, newValue) => {
    setValueTabs(newValue);
  };

  const handleChangeIndex = (index) => {
    setValueTabs(index);
  };

  const handleOnSubimit = async (e) => {
    e.preventDefault();

    const data = {
      razaoSocial,
      nomeFantasia,
      cnpj,
      inscricaoEstadual,
      telefone,
      email,
      cep,
      logradouro,
      bairro,
      numero,
      complemento,
      contador,
      cnaePrincipal,
      regimeTributario,
    };

    if (id) {
      await update(data, id);
    } else {
      await create(data);
    }
  };

  const handleOnClickCancelar = (e) => {
    e.preventDefault();
    history.push("/empresa");
  };

  return (
    <Card variant="outlined">
      <form onSubmit={handleOnSubimit}>
        <CardContent>
          <CardActions>
            <Typography color="textSecondary" variant="h5" gutterBottom>
              {id ? "Editar" : "Adicionar"} empresa
            </Typography>
            <div className={classes.grow} />
            <Button
              onClick={handleOnClickCancelar}
              color="primary"
              size="small"
            >
              Cancelar
            </Button>
            <Button type="submit" color="primary" size="small">
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
              aria-label="full width tabs example"
            >
              <Tab label="Básico" {...a11yProps(0)} />
              <Tab label="Endereço" {...a11yProps(1)} />
              <Tab label="Fiscal" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={valueTabs}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={valueTabs} index={0} dir={theme.direction}>
              <TextField
                style={{ marginTop: 8, marginBottom: 8 }}
                label="Razão Social"
                variant="outlined"
                margin="dense"
                fullWidth
                value={razaoSocial}
                onChange={(e) => setRazaoSocial(e.target.value)}
              />
              <TextField
                style={{ marginTop: 8, marginBottom: 8 }}
                label="Nome Fantasia"
                variant="outlined"
                margin="dense"
                fullWidth
                value={nomeFantasia}
                onChange={(e) => setNomeFantasia(e.target.value)}
              />
              <TextField
                label="CNPJ"
                style={{ marginTop: 8, marginBottom: 8 }}
                fullWidth
                margin="dense"
                variant="outlined"
                name="cnpj"
                value={cnpj}
                onChange={(e) => setCnpj(e.target.value)}
              />
              <TextField
                label="Inscrição Estadual (IE)"
                style={{ marginTop: 8, marginBottom: 8 }}
                fullWidth
                margin="dense"
                variant="outlined"
                name="inscricaoEstadual"
                value={inscricaoEstadual}
                onChange={(e) => setInscricaoEstadual(e.target.value)}
              />
              <TextField
                label="Telefone"
                style={{ marginTop: 8, marginBottom: 8 }}
                fullWidth
                margin="dense"
                variant="outlined"
                name="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
              <TextField
                label="E-mail"
                style={{ marginTop: 8, marginBottom: 8 }}
                fullWidth
                margin="dense"
                variant="outlined"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />
              <TextField
                label="Logradouro"
                style={{ marginTop: 8, marginBottom: 8 }}
                fullWidth
                margin="dense"
                variant="outlined"
                name="logradouro"
                value={logradouro}
                onChange={(e) => setLogradouro(e.target.value)}
              />
              <TextField
                label="Bairro"
                style={{ marginTop: 8, marginBottom: 8 }}
                fullWidth
                margin="dense"
                variant="outlined"
                name="bairro"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
              />
              <TextField
                label="Número"
                style={{ marginTop: 8, marginBottom: 8 }}
                fullWidth
                margin="dense"
                variant="outlined"
                name="numero"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
              />
              <TextField
                label="Municipio"
                style={{ marginTop: 8, marginBottom: 8 }}
                fullWidth
                margin="dense"
                variant="outlined"
                name="municipio"
              />
              <TextField
                label="Complemento"
                style={{ marginTop: 8, marginBottom: 8 }}
                fullWidth
                margin="dense"
                variant="outlined"
                name="complemento"
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
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
                value={contador}
                onChange={(e) => setContador(e.target.value)}
              />
              <TextField
                label="CNAE Principal"
                style={{ marginTop: 8, marginBottom: 8 }}
                fullWidth
                margin="dense"
                variant="outlined"
                name="cnaePrincipal"
                value={cnaePrincipal}
                onChange={(e) => setCnaePrincipal(e.target.value)}
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
                value={regimeTributario}
                onChange={(e) => setRegimeTributario(e.target.value)}
              />
            </TabPanel>
          </SwipeableViews>
        </CardContent>
      </form>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  one: state.empresa.one,
});

const mapDispatchToProps = (dispatch) => {
  return {
    load: (id) => {
      dispatch(EmpresaApi.empresaOne(id));
    },
    create: (data) => {
      dispatch(EmpresaApi.empresaCreate(data));
    },
    update: (data, id) => {
      dispatch(EmpresaApi.empresaUpdate(data, id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmpresaForm);
