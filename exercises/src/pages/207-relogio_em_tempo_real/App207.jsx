import React from "react";

const App207 = () => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const intervalo = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalo);
    };
  }, []);

  return (
    <div>
      <h1>Relógio</h1>
      <span>{time.toLocaleTimeString()}</span>
    </div>
  );
};

export default App207;
