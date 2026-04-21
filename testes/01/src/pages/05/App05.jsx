import React from "react";
import Produtos from "./components/Produtos";

const App05 = () => {
  const [produtos, setProdutos] = React.useState(null);

  //Pega do local storage
  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem("produto");
    if (produtoLocal !== null) setProdutos(produtoLocal);
  }, []);

  //Armazenando no localStorage
  React.useEffect(() => {
    if (produtos !== null) window.localStorage.setItem("produto", produtos);
  }, [produtos]);

  const hancheClick = ({ target }) => {
    setProdutos(target.innerText);
  };

  return (
    <div>
      <h1>Produto selecionado: {produtos && produtos}</h1>
      <button onClick={hancheClick}>Notebook</button>
      <button onClick={hancheClick}>Smartphone</button>
      <Produtos produtos={produtos} />
    </div>
  );
};

export default App05;
