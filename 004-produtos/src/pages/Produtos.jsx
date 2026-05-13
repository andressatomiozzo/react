import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Produtos.module.css";
import Head from "../Head";

const Produtos = () => {
  const params = useParams();

  const [dados, setDados] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const buscar = async (produto) => {
    let resposta;
    let json;
    try {
      setLoading(true);
      resposta = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`);
      json = await resposta.json();
      if (!resposta.ok) return err;
      setDados(json);
    } catch (err) {
      setError("Ops, algo deu errado");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    buscar(params.id);
  }, [params.id]);

  if(loading) return <div className="loading"></div>
  if(error) return <p>{error}</p>
  if(dados === null) return null
  return (
    <>
      <Head title={`Ranek | ${dados.nome}`} description={`Esse é um produto ${dados.nome}`} />
      {dados && (
        <section className={`${styles.main} animeLeft`}>
          <div>{dados.fotos.map(foto => <img key={foto.src} src={foto.src} alt={foto.descricao} />)}</div>
          <div>
            <h1>{dados.nome}</h1>
            <span>R$ {dados.preco}</span>
            <p>{dados.descricao}</p>
          </div>
        </section>
      )}
    </>
  );
};

export default Produtos;
