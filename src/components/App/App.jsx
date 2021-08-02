import React from "react";
import { HashRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { CssBaseline } from "@material-ui/core";
import { StylesProvider } from "@material-ui/core/styles";
import { Routing } from "./App.Routing";
import { HashRouter } from "react-router-dom";

const Global = createGlobalStyle`
html {
  min-height: 100vh;
  height: 100%;
}

body {
  overflow-x: hidden;
overflow-y: scroll;
min-height: 100vh;
height: 100%;
}

#root {
  min-height: 100vh;
}
`;

export const App = () => {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <Global />
      <HashRouter>
        <Routing />
      </HashRouter>
    </StylesProvider>
  );
};

export default App;
