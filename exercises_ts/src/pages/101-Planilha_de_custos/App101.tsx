import React, { useEffect } from "react";
import useFetch from "./useFetch";
import { normalizarTransacao, type TransacaoAPI } from "./normalizarTransacao";
import Statistics from "./Statistics";
import Table from "./Table";

const App101 = () => {
  const { data, loading, error, request } = useFetch<TransacaoAPI[]>();

  React.useEffect(() => {
    request("https://api.origamid.dev/json/transacoes.json");
  }, [request]);

  if (data && Array.isArray(data)) {
    const dataNormalizado = data.map((item) => normalizarTransacao(item));
    return (
      <div>
        <Statistics dados={dataNormalizado} />
        <Table dados={dataNormalizado} />
      </div>
    );
  }
  return null;
};

export default App101;
