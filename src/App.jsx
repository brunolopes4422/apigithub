// src/App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Normalize } from "styled-normalize";
import AppRoutes from "./routes";  // Importando como default
import { GlobalStyle } from "./styles/global";
import { Theme } from "./styles/Theme"; // Usando a exportação nomeada

const App = () => (
  <BrowserRouter>
    <Theme>
      <AppRoutes />
      <GlobalStyle />
      <Normalize />
    </Theme>
  </BrowserRouter>
);

export default App;
