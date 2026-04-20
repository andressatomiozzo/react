import React from "react";
import Button from "./components/Button";
import Produtos from "./components/Produtos";

const App04 = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  return (
    <div>
      <Button setDados={setDados} setCarregando={setCarregando}>Tablet</Button>
      <Button setDados={setDados} setCarregando={setCarregando}>Smartphone</Button>
      <Button setDados={setDados} setCarregando={setCarregando}>Notebook</Button>

      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produtos dados={dados} />}
    </div>
  );
};

export default App04;
