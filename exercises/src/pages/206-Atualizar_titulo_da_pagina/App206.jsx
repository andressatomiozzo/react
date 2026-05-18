import React from "react";

const App206 = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    document.title = `Você clicou ${count} vezes`;
  }, [count]);

  return (
    <div>
      <h1>Título</h1>
      <h2>Você clicou {count} vezes</h2>
      <button onClick={() => setCount(count + 1)}>Clique para aumentar 1</button>
    </div>
  );
};

export default App206;
