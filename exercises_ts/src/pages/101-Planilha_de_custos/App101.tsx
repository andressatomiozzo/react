import React, { useEffect } from "react";
import useFetch from "./useFetch";

type TransacaoPagamento = "Cartão de Crédito" | "Boleto";
type TransacaoStatus = "Paga" | "Recusada pela operadora de cartão" | "Aguardando pagamento" | "Estornada";

interface TransacaoAPI {
  Nome: string;
  ID: number;
  Data: string;
  Status: TransacaoStatus;
  Email: string;
  ["Valor (R$)"]: string;
  ["Cliente Novo"]: number;
  ["Forma de Pagamento"]: TransacaoPagamento;
}

const App101 = () => {
  const { data, loading, error, request } = useFetch<TransacaoAPI[]>();

  React.useEffect(() => {
    request("https://api.origamid.dev/json/transacoes.json");
  }, [request]);

  if (data && Array.isArray(data)) {
    data.forEach((item) => {
      console.log(item)
    });
  }

  return <div>oie</div>;
};

export default App101;
