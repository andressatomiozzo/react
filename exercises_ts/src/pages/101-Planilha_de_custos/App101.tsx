import React, { useEffect } from "react";
import useFetch from "./useFetch";
import { normalizarTransacao, type TransacaoAPI } from "./normalizarTransacao";

const App101 = () => {
  const { data, loading, error, request } = useFetch<TransacaoAPI[]>();

  React.useEffect(() => {
    request("https://api.origamid.dev/json/transacoes.json");
  }, [request]);

  if (data && Array.isArray(data)) {
    const transacoes = data.map(normalizarTransacao);
    console.log(
      transacoes.forEach((item) => {
        console.log(item.data );
      }),
    );
  }

  return <div>oie</div>;
};

export default App101;
