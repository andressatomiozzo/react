import React from "react";
import type { Transacao } from "./normalizarTransacao";
import { countBy } from "./countBy";
import type {CountList} from "./countBy";

const Statistics = ({ dados }: { dados: Transacao[] }) => {
  const total = () => {
    const valorTotal = dados.reduce((total, item) => total + (item.valor ? item.valor : 0), 0);
    return valorTotal.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const meioPagamento = () => {
    return countBy(dados.map(({ pagamento }) => pagamento));
  };

  const pagamentoStatus = () => {
    return countBy(dados.map(({ status }) => status));
  };

  interface Pagamentos {
    total: string;
    meioPagamento: CountList;
    status: CountList;
  }

  const pagamentos: Pagamentos = {
    total: total(),
    meioPagamento: meioPagamento(),
    status: pagamentoStatus(),
  };


  //Outro modo:
  const valorTotal = dados.reduce((total, item) => total + (item.valor ? item.valor : 0), 0);
  const valorTotalRS = valorTotal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  // const valorTotalRS = new Intl.NumberFormat("pt-BR", {
  //   style: "currency",
  //   currency: "BRL",
  // }).format(valorTotal);

  const cartao = dados.filter((item) => item.pagamento === "Cartão de Crédito");
  const boleto = dados.filter((item) => item.pagamento === "Boleto");

  const pago = dados.filter((item) => item.status === "Paga");
  const recusada = dados.filter((item) => item.status === "Recusada pela operadora de cartão");
  const aguardandoPagamento = dados.filter((item) => item.status === "Aguardando pagamento");
  const estornada = dados.filter((item) => item.status === "Estornada");

  const vendas: number[] = [];
  for (let i = 0; i < 7; i++) vendas.push(dados.filter((item) => item.data.getDay() === i).length);
  const diaVendas = vendas.indexOf(Math.max(...vendas));
  const diasSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  React.useEffect(() => {});

  return (
    <div>
      <h1>Estatísticas de vendas</h1>
      <ul>
        <li>Valor total recebido: {pagamentos.total}</li>
      </ul>
      <ul>
        <li>Cartão de crédito: {pagamentos.meioPagamento['Cartão de Crédito']}</li>
        <li>Boleto: {pagamentos.meioPagamento['Boleto']}</li>
      </ul>
      <ul>
        <li>Paga: {pago.length}</li>
        <li>Recusada pela operadora: {recusada.length}</li>
        <li>Aguardando Pagamento: {aguardandoPagamento.length}</li>
        <li>Estornada: {estornada.length}</li>
        <li>Dia com mais vendas: {diasSemana[diaVendas]}</li>
      </ul>
    </div>
  );
};

export default Statistics;
