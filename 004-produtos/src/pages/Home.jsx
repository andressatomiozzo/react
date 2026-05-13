import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Head from "../Head";

const Home = () => {
  const [dados, setDados] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const buscar = async () => {
    let response;
    let json;
    try {
      setLoading(true);
      response = await fetch(`https://ranekapi.origamid.dev/json/api/produto`);
      json = await response.json();
      if (!response.ok) return err;
    } catch (err) {
      console.log("Ops, algo deu errado");
    } finally {
      setDados(json);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    buscar();
  }, []);

  if(loading === true) return <div className="loading"></div>
  if(dados === null) return null;
  return (
    <main className={`${styles.main} animeLeft`}>
      <Head title="Ranek" description="Página inicial" />

      {dados &&
        dados.map((produto) => (
          <Link to={`produtos/${produto.id}`} key={produto.id}>
            <img className={styles.img} src={produto.fotos[0].src} alt={produto.fotos[0].title} />
            <p>{produto.nome}</p>
          </Link>
        ))}
    </main>
  );
};

export default Home;
