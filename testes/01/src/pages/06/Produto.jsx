import React from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  const dados = React.useContext(GlobalContext);
  console.log(dados)
  const handleClick = () => {
    dados.setContar(contar => contar + 1)
  }
  return (
    <div>
      <p>Contador = {dados.contar}</p>
      <button onClick={handleClick}>Adicionar</button>
    </div>
  );
};

export default Produto;
