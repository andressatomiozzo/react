import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Head from "../Head";

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
    <main className={styles.main}>
      <Head title="Ranek | Home" description="Página Home" />
      {dados &&
        dados.map((produto) => (
          <Link to={`produtos/${produto.id}`} key={produto.id}>
            <img className={styles.img} src={produto.fotos[0].src} alt={`Imagem de um ${produto.nome}`} />
            <p>{produto.nome}</p>
          </Link>
        ))}
    </main>
  );
};

export default Home;
