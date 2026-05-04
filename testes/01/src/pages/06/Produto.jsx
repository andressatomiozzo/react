import React from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  const global = React.useContext(GlobalContext);

  if (global.dados === null) return null;
  return (
    <div>
      <h1>Produtos:</h1>
      <ul>
        {global.dados.map((produto) => (
          <li key={produto.id}>{produto.nome}</li>
        ))}
      </ul>
      <button onClick={global.limparDados}>Limpar dados</button>
    </div>
  );
};

export default Produto;
