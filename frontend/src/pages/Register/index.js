import React from "react";
import { useHistory } from "react-router-dom";

import {
  Container,
  TextField,
  Button,
  Grid,
  Link,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";

import useStyles from "./styles";

const Register = () => {
  const classes = useStyles();
  const history = useHistory();

  const handlerOnClickHome = (e) => {
    e.preventDefault();
    history.push("/");
  };

  return (
    <Container component="main" className={classes.paper}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography component="h5" variant="h5">
                Criar uma conta
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Digitar endereço de e-mail"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="nomeCompleto"
                  label="Digitar nome completo"
                  name="nomecompleto"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Criar senha"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Registre-se
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link onClick={handlerOnClickHome} variant="body2">
                      Já tem uma conta? Entrar
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
