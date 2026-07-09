type TransacaoPagamento = "Cartão de Crédito" | "Boleto";
type TransacaoStatus = "Paga" | "Recusada pela operadora de cartão" | "Aguardando pagamento" | "Estornada";

export interface TransacaoAPI {
  Nome: string;
  ID: number;
  Data: string;
  Status: TransacaoStatus;
  Email: string;
  ["Valor (R$)"]: string;
  ["Forma de Pagamento"]: TransacaoPagamento;
  ["Cliente Novo"]: number;
}

export interface Transacao {
  nome: string;
  id: number;
  data: Date;
  status: TransacaoStatus;
  email: string;
  moeda: string;
  valor: number | null;
  pagamento: TransacaoPagamento;
  novo: boolean;
}

export const normalizarTransacao = (transacao: TransacaoAPI): Transacao => {
  const curancyToNumber = (moeda: string): number | null => {
    const numero = Number(moeda.replaceAll(".", "").replace(",", "."));
    return isNaN(numero) ? null : numero;
  };

  const stringToDate = (text: string): Date => {
    const [data, tempo] = text.split(" ");
    const [dia, mes, ano] = data.split("/").map(Number);
    const [horas, minutos] = tempo.split(":").map(Number);
    return new Date(ano, mes - 1, dia, horas, minutos);
  };

  return {
    nome: transacao.Nome,
    id: transacao.ID,
    data: stringToDate(transacao.Data),
    status: transacao.Status,
    email: transacao.Email,
    moeda: transacao["Valor (R$)"],
    valor: curancyToNumber(transacao["Valor (R$)"]),
    pagamento: transacao["Forma de Pagamento"],
    novo: Boolean(transacao["Cliente Novo"]),
  };
};
