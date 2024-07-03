import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import RepositoriesPage from './pages/RepositoriesPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/:login/repositories" element={<RepositoriesPage />} />
    <Route path="/" element={<MainPage />} />
  </Routes>
);

export default AppRoutes;
