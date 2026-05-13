import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [dados, setDados] = React.useState([]);

  const buscar = async () => {
    try {
      const resposta = await fetch(`https://ranekapi.origamid.dev/json/api/produto`);
      const json = await resposta.json();
      if (!resposta.ok) return err;
      setDados(json);
    } catch (err) {
      console.log("Ops, algo deu errado");
    }
  };

  React.useEffect(() => {
    buscar();
  }, []);

  return (
    <div>
      {dados &&
        dados.map((produto) => (
          <Link to={`produtos/${produto.id}`} key={produto.id}>
            <img src={produto.fotos[0].src} alt={`Imagem de um ${produto.nome}`} />
            <p>{produto.nome}</p>
          </Link>
        ))}
    </div>
  );
};

export default Home;
