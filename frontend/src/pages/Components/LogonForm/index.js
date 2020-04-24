import React, { useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Link,
  Card,
  CardContent,
  Container,
  Typography,
} from "@material-ui/core";
import { useSnackbar } from "notistack";
import MyCircularProgress from "./../../../components/CircularProgress";

import useStyles from "./styles";

const LogonForm = ({ fetchAutenticacao, loading, errors }) => {
  const history = useHistory();
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (errors.global) {
      enqueueSnackbar(errors.global, { variant: "error" });
    }
  }, [errors, enqueueSnackbar]);

  const defaultFormShape = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("O campo é obrigatório.")
      .email("Digite um email válido."),
    password: Yup.string()
      .required("O campo é obrigatório.")
      .min(8, "O campo deve ter no minimo 8 caracteres."),
  });

  const handlerOnClickResetPassword = (e) => {
    e.preventDefault();
    history.push("/resetpassword");
  };

  const handlerOnClickRegister = (e) => {
    e.preventDefault();
    history.push("/register");
  };

  return (
    <Formik
      initialValues={defaultFormShape}
      enableReinitialize
      validationSchema={validationSchema}
      onSubmit={(values) => {
        return fetchAutenticacao(values);
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
          <MyCircularProgress loading={loading} />
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
                  body1. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
                  inventore consectetur, neque doloribus, cupiditate numquam
                  dignissimos laborum fugiat deleniti? Eum quasi quidem
                  quibusdam.
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Card variant="outlined">
                  <CardContent>
                    <form
                      onSubmit={handleSubmit}
                      loading={loading}
                      className={classes.form}
                    >
                      <TextField
                        required
                        variant="outlined"
                        margin="dense"
                        id="username"
                        label="Digite aqui seu e-mail"
                        name="username"
                        fullWidth
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                          errors.username && touched.username && errors.username
                        }
                        error={errors.username && touched.username}
                      />
                      <TextField
                        required
                        variant="outlined"
                        margin="dense"
                        name="password"
                        label="Digite aqui sua senha"
                        type="password"
                        id="password"
                        fullWidth
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                          errors.password && touched.password && errors.password
                        }
                        error={errors.password && touched.password}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            size="small"
                            value="remember"
                            color="primary"
                          />
                        }
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
                          <Link
                            onClick={handlerOnClickResetPassword}
                            variant="body2"
                          >
                            Não consegue entrar?
                          </Link>
                        </Grid>
                        <Grid item>
                          <Link
                            onClick={handlerOnClickRegister}
                            variant="body2"
                          >
                            Criar uma conta
                          </Link>
                        </Grid>
                      </Grid>
                    </form>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </div>
      )}
    />
  );
};

export default LogonForm;
