import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Produtos from "./pages/Produtos";
import Header from "./Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contato" element={<Contato />} />
        <Route path="produtos/:id" element={<Produtos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
