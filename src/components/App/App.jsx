import React from "react";
import { HashRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { CssBaseline } from "@material-ui/core";
import { StylesProvider } from "@material-ui/core/styles";
import { Routing } from "./App.Routing";
import { Provider as AuthProvider } from "../../hooks/useAuth";

const Global = createGlobalStyle`
html {
  height: 100%;
}

body {
  overflow-x: hidden;
  overflow-y: scroll;
  min-height: 100vh;
  background: white;
}
`;

export const App = () => {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <Global />

      <AuthProvider>
        <HashRouter>
          <Routing />
        </HashRouter>
      </AuthProvider>
    </StylesProvider>
  );
};

export default App;
