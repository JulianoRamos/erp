import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {
  Card,
  CardContent,
  Typography,
  AppBar,
  Tabs,
  Tab,
  Box,
  CardActions,
  Button,
  TextField,
} from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";

// import { Container } from './styles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={1}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const EmpresaForm = () => {
  const theme = useTheme();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Card variant="outlined">
      <form>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Adicionar empresa
          </Typography>
          <Box p={1}>
            <TextField
              style={{ marginTop: 8, marginBottom: 8 }}
              label="Razão Social"
              variant="outlined"
              margin="dense"
              fullWidth
            />
            <TextField
              style={{ marginTop: 8, marginBottom: 8 }}
              label="Nome Fantasia"
              variant="outlined"
              margin="dense"
              fullWidth
            />
          </Box>
          <AppBar position="static" color="default" variant="outlined">
            <Tabs
              value={value}
              onChange={handleChange}
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
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <TextField
                label="Inscrição Estadual (IE)"
                style={{ marginTop: 8, marginBottom: 8 }}
                fullWidth
                margin="dense"
                variant="outlined"
                name="inscricaoEstadual"
              />
              <TextField
                label="Telefone"
                style={{ marginTop: 8, marginBottom: 8 }}
                fullWidth
                margin="dense"
                variant="outlined"
                name="telefone"
              />
              <TextField
                label="E-mail"
                style={{ marginTop: 8, marginBottom: 8 }}
                fullWidth
                margin="dense"
                variant="outlined"
                name="email"
              />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <TextField
                label="Cep"
                style={{ marginTop: 8, marginBottom: 8 }}
                fullWidth
                margin="dense"
                variant="outlined"
                name="cep"
              />
              <TextField
                label="Logradouro"
                style={{ marginTop: 8, marginBottom: 8 }}
                fullWidth
                margin="dense"
                variant="outlined"
                name="logradouro"
              />
              <TextField
                label="Bairro"
                style={{ marginTop: 8, marginBottom: 8 }}
                fullWidth
                margin="dense"
                variant="outlined"
                name="bairro"
              />
              <TextField
                label="Número"
                style={{ marginTop: 8, marginBottom: 8 }}
                fullWidth
                margin="dense"
                variant="outlined"
                name="numero"
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
              />
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <TextField
                label="Contador"
                style={{ marginTop: 8, marginBottom: 8 }}
                fullWidth
                margin="dense"
                variant="outlined"
                name="contador"
              />
              <TextField
                label="CNAE Principal"
                style={{ marginTop: 8, marginBottom: 8 }}
                fullWidth
                margin="dense"
                variant="outlined"
                name="cnaePrincipal"
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
              />
            </TabPanel>
          </SwipeableViews>
        </CardContent>
        <CardActions>
          <Button color="primary" size="small">
            Salvar
          </Button>
          <Button color="primary" size="small">
            Cancelar
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

const mapStateToProps = (state) => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(EmpresaForm);
