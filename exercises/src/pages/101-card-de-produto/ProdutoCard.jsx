import React from "react";

const ProdutoCard = ({ nome, preco, disponivel }) => {
  return (
    <div>
      <h3>{nome}</h3>
      <ul>
        <li>R$ {preco.toFixed(2)}</li>
        <li>{disponivel ? "Disponível" : "Indisponível"}</li>
      </ul>
    </div>
  );
};

export default ProdutoCard;
