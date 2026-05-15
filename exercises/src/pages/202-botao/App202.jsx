//useState

// import React from "react";

// const App202 = () => {
//   const [contar, setContar] = React.useState(0);

//   const adicionar1 = () => setContar(contar + 1);
//   const remover1 = () => contar > 0 && setContar(contar - 1);
//   const resetar = () => setContar(0);
//   return (
//     <div>
//       <p>{contar}</p>
//       <button onClick={adicionar1}>Adicionar 1</button>
//       <button onClick={remover1}>Remover 1</button>
//       <button onClick={resetar}>Resetar</button>
//     </div>
//   );
// };

// export default App202;

import React from "react";

const reducer = (state, action) => {
  switch (action) {
    case "adicionar1":
      return state + 1;
    case "remover1":
      return state > 1 ? state - 1 : state = 0;
    case "resetar":
      return (state = 0);
    default:
      throw new Error("O action não está escrito corretamente");
  }
};

const App202 = () => {
  const [state, dispatch] = React.useReducer(reducer, 0);

  return (
    <div>
      <p>{state}</p>
      <button onClick={() => dispatch("adicionar1")}>Adicionar 1</button>
      <button onClick={() => dispatch("remover1")}>Remover 1</button>
      <button onClick={() => dispatch("resetar")}>Resetar</button>
    </div>
  );
};

export default App202;
