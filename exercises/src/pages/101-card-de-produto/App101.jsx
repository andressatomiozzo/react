import React from "react";
import ProdutoCard from "./ProdutoCard";

const App101 = () => {
  return (
    <>
      <h1>Produtos da loja:</h1>
      <ProdutoCard nome="Notebook" preco={3500} disponivel={true} />
      <ProdutoCard nome="Celular" preco={1500} disponivel={false} />
      <ProdutoCard nome="Tablet" preco={2000} disponivel={true} />
    </>
  );
};

export default App101;
