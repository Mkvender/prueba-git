import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio/Inicio"
import Layout from "./pages/common/Layout";
import Pelis from "./pages/Pelis/Pelis";
import Series from "./pages/Series/Series";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Layout />}>
          <Route index element={<Inicio />} />
        </Route>
        <Route path="/pelis" element={<Layout />}>
          <Route index element={<Pelis />} />
        </Route>
        <Route path="/series" element={<Layout />}>
          <Route index element={<Series />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
