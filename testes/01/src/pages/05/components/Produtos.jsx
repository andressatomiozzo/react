import React from "react";

const Produtos = ({ produtos }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if (produtos !== null) {
      //   fetch(`https://ranekapi.origamid.dev/json/api/produto/${produtos}`)
      //     .then((response) => response.json())
      //     .then((json) => setDados(json));
      // }
      const fetchData = async () => {
        try {
          const resposta = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${produtos}`);
          const json = await resposta.json();
          if (!resposta.ok) throw new Error("Erro ao buscar produto");
          setDados(json);
        } catch (err) {
          console.log(err);
        }
      }
      fetchData();
    }
  }, [produtos]);

  if (dados === null) return null;
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
    </div>
  );
};

export default Produtos;
