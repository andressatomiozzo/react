import React from "react";

const Filho = React.memo(({ onClick }) => {
  console.log("Filho renderizou - sem");
  return <button onClick={onClick}>Filho</button>;
});

export function SemUseCallback() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    console.log("clicou");
  };

  return (
    <>
      <h1>Sem useCallback</h1>
      <button onClick={() => setCount(count + 1)}>Contador: {count}</button>

      <Filho onClick={handleClick} />
    </>
  );
}
