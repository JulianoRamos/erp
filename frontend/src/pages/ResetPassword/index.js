import React from "react";
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

import MyLink from "./../Components/Link";

import useStyles from "./styles";

const ResetPassword = () => {
  const classes = useStyles();
  return (
    <Container component="main" className={classes.paper}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography component="h5" variant="h5">
                Não consegue entrar?
              </Typography>
              <Typography component="subtitle1" variant="subtitle1">
                A gente vai mandar um link de recuperação para
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Digitar e-mail"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Enviar link de recuperação
                </Button>
                <Grid container>
                  <Grid item xs>
                    <MyLink to="/">
                      <Link variant="body2">Voltar à página de entrada</Link>
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

export default ResetPassword;
