import React from "react";

const Filho = React.memo(({ onClick }) => {
  console.log("Filho renderizou - com");
  return <button onClick={onClick}>Filho</button>;
});

export function ComUseCallback() {
  const [count, setCount] = React.useState(0);

  const handleClick = React.useCallback(() => {
    console.log("clicou");
  }, []);

  return (
    <>
      <h1>Com useCallback</h1>
      <button onClick={() => setCount(count + 1)}>Contador: {count}</button>

      <Filho onClick={handleClick} />
    </>
  );
}
