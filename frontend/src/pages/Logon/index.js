import React from "react";
import {
  Container,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Link,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import MyLink from "./../Components/Link";

import { login } from "../../services/auth";

import useStyles from "./styles";

const Logon = () => {
  const classes = useStyles();
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      login("teste");
      history.push("/");
    } catch (error) {}
  }

  return (
    <Container component="main" className={classes.paper}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={6}
      >
        <Grid item xs>
          <Typography color="primary" variant="h2" gutterBottom>
            h2. Heading
          </Typography>
          <Typography color="primary" variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Card variant="outlined">
            <CardContent>
              <form onSubmit={handleLogin} className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Digite aqui seu e-mail"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Digite aqui sua senha"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Manter-me conectado"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  ENTRAR
                </Button>
                <Grid container>
                  <Grid item xs>
                    <MyLink to="/resetpassword">
                      <Link variant="body2">Não consegue entrar?</Link>
                    </MyLink>
                  </Grid>
                  <Grid item>
                    <MyLink to="/register">
                      <Link variant="body2">Criar uma conta</Link>
                    </MyLink>
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

export default Logon;
