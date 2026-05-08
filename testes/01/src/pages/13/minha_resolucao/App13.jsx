import React from "react";
import InputRadio from "./form/InputRadio";
import { perguntas } from "../minha_resolucao/data";

const App13 = () => {
  const [p1, setP1] = React.useState("");
  const [p2, setP2] = React.useState("");
  const [p3, setP3] = React.useState("");
  const [p4, setP4] = React.useState("");
  const respostas = [p1, p2, p2, p4];
  const [page, setPage] = React.useState(0);
  const [points, setPoints] = React.useState(0);

  const handleClick = () => {
    for (let i = 0; i < respostas.length; i++) {
      if (page === i && respostas[i] === perguntas[i].resposta) setPoints(points + 1);
    }
    setPage(page + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      {page === 0 && (
        <>
          <h2>{perguntas[0].pergunta}</h2>
          <InputRadio options={perguntas[0].options} value={p1} setValue={setP1} />
        </>
      )}

      {page === 1 && (
        <>
          <h2>{perguntas[1].pergunta}</h2>
          <InputRadio options={perguntas[1].options} value={p2} setValue={setP2} />
        </>
      )}

      {page === 2 && (
        <>
          <h2>{perguntas[2].pergunta}</h2>
          <InputRadio options={perguntas[2].options} value={p3} setValue={setP3} />
        </>
      )}

      {page === 3 && (
        <>
          <h2>{perguntas[3].pergunta}</h2>
          <InputRadio options={perguntas[3].options} value={p4} setValue={setP4} />
        </>
      )}

      {page < 4 && <button onClick={handleClick}>Próxima</button>}

      {page === 4 && <p>Você acertou: {points} de 4</p>}
    </form>
  );
};

export default App13;
