import React from "react";
import { Provider } from "react-redux";

import "typeface-roboto";
import "./global.css";

import store from "./store";
import Routes from "./routes";

import { SnackbarProvider } from "notistack";

const App = () => {
  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <Routes />
      </SnackbarProvider>
    </Provider>
  );
};

export default App;
