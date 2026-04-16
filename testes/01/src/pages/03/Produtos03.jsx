import React from "react";
import Titulo from "./Titulo03";

const produtos = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
];

const Produtos = () => {
  return (
    <section>
      <Titulo>Produtos</Titulo>
      {produtos.map(({nome, propriedades}) => (
        <div key={nome}>
          <p>{nome}</p>
          <ul>{propriedades.map((p, i) => (<li key={propriedades[i]}>{p}</li>))}</ul>
        </div>
      ))}
    </section>
  );
};

export default Produtos;
