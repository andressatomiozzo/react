import React from "react";

const App211 = () => {
  const [timer, setTimer] = React.useState(0);

  const intervaloRef = React.useRef(null);

  const haldleStart = () => {
    if (intervaloRef.current !== null) return;
    intervaloRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const haldlePause = () => {
    clearInterval(intervaloRef.current);
    intervaloRef.current = null;
  };

  const haldleReset = () => {
    clearInterval(intervaloRef.current);
    intervaloRef.current = null;
    setTimer(0);
  };

  return (
    <div>
      <p>Timer: {timer ? timer : "0"}</p>
      <button onClick={haldleStart}>Iniciar</button>
      <button onClick={haldlePause}>Pausar</button>
      <button onClick={haldleReset}>Resetar</button>
    </div>
  );
};

export default App211;
