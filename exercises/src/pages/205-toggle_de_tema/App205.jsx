import React from "react";
import "./App205.css";

const App205 = () => {
  const [claro, setClaro] = React.useState(true);

  return (
    <div className={`body ${claro ? null : "bodyEscuro"}`}>
      <button className="claro btn" onClick={() => setClaro(true)}>Claro</button>
      <button className="escuro btn" onClick={() => setClaro(false)}>Escuro</button>
    </div>
  );
};

export default App205;
