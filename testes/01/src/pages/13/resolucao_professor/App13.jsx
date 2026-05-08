import React from "react";
import InputRadio from "./form/InputRadio";
import { perguntas } from "../minha_resolucao/data";

const App13 = () => {
  const [respostas, setRespostas] = React.useState(
    perguntas.reduce((acc, pergunta) => {
      acc[pergunta.id] = "";
      return acc;
    }, {}),
  );
  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState(null);

  const handleChange = ({ target }) => {
    setRespostas({ ...respostas, [target.id]: target.value });
  };

  const resultadoFinal = () => {
    const corretas = perguntas.filter(({ id, resposta }) => respostas[id] === resposta);
    setResultado(`Você acertou ${corretas.length} de ${perguntas.length}`)
  };

  const handleClick = () => {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      resultadoFinal()
      setSlide(slide + 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      {perguntas.map((pergunta, index) => (
        <InputRadio active={slide === index} key={pergunta.id} onChange={handleChange} value={respostas[pergunta.id]} {...pergunta} />
      ))}

      {resultado ? <p>{resultado}</p> : <button onClick={handleClick}>Próxima</button>}
    </form>
  );
};

export default App13;
