import React from "react";
import { HashRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { CssBaseline } from "@material-ui/core";
import { StylesProvider } from "@material-ui/core/styles";
import { Routing } from "./App.Routing";
import { Provider as AuthProvider } from "../../hooks/useAuth";

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register("/service-worker.js")
}

const Global = createGlobalStyle`
@font-face {
  font-family: "Roboto";
  src: url("/fonts/400.ttf") format('truetype');
  font-weight: 400;
  font-style: "normal";
}

@font-face {
  font-family: "Roboto";
  src: url("/fonts/500.ttf") format('truetype');
  font-weight: 500;
  font-style: "normal";
}

@font-face {
  font-family: "Roboto";
  src: url("/fonts/700.ttf") format('truetype');
  font-weight: 700;
  font-style: "normal";
}

@font-face {
  font-family: "Roboto";
  src: url("/fonts/900.ttf") format('truetype');
  font-weight: 900;
  font-style: "normal";
}

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
