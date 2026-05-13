import React from "react";
import { useParams } from "react-router-dom";

const Produtos = () => {
  const params = useParams();

  return (
    <div>
      <h1>Produtos</h1>
      <p>id: {params.id}</p>
    </div>
  );
};

export default Produtos;
