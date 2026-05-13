import React from "react";
import { useParams } from "react-router-dom";

const Produtos = () => {
  const params = useParams();

  const [dados, setDados] = React.useState([]);

  const buscar = async (produto) => {
    try {
      const resposta = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`);
      const json = await resposta.json();
      if (!resposta.ok) return err;
      setDados(json);
    } catch (err) {
      console.log("Ops, algo deu errado");
    }
  };

  React.useEffect(() => {
    buscar(params.id);
  }, []);

  return (
    <div>
      <h1>Produtos</h1>
      <p>id: {dados && dados.nome}</p>
    </div>
  );
};

export default Produtos;
