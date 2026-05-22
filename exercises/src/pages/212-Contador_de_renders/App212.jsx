import React from "react";

const App212 = () => {
  const [componente, setComponente] = React.useState(0);

  const referencia = React.useRef(0);

  React.useEffect(() => {
    referencia.current += 1;
    console.log(referencia.current)
  }, [componente]);

  const handleClick = () => {
    setComponente((comp) => comp + 1);
  };

  const handleRenderClick = () => {
    console.log(referencia)
  }

  return (
    <div>
      <p>Compornente: {componente}</p>
      <button onClick={handleRenderClick}>Renderizações</button>
      <button onClick={handleClick}>Adicionar 1</button>
    </div>
  );
};

export default App212;
