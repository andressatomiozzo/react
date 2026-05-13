import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Produtos.module.css";
import Head from "../Head";

const Produtos = () => {
  const params = useParams();

  const [dados, setDados] = React.useState(null);

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
    <>
      <Head title="Ranek | Produtos" description="Página dos produtos" />

      {dados && (
        <main className={styles.main}>
          <img src={dados.fotos[0].src} alt={`Imagem de um ${dados.nome}`} />
          <div>
            <h1>{dados.nome}</h1>
            <span>R$ {dados.preco}</span>
            <p>{dados.descricao}</p>
          </div>
        </main>
      )}
    </>
  );
};

export default Produtos;
