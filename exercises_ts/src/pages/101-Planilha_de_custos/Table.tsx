import React from "react";
import type { Transacao } from "./normalizarTransacao";

const Table = ({ dados }: { dados: Transacao[] }) => {
  return (
    <div>
      <h1>Dados</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Compra</th>
            <th>Pagamento</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, i) => (
            <tr key={i}>
              <td>{item.nome}</td>
              <td>{item.email}</td>
              <td>R$ {item.moeda}</td>
              <td>{item.pagamento}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
