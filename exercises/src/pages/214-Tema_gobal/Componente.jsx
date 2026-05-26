import React from 'react'
import { TemaContext }  from "./temaContext"

const Componente = () => {
  const { tema, setTema } = React.useContext(TemaContext);

  return (
    <>
      <h1>Tema atual: {tema ? "dia": "noite"}</h1>

      <button onClick={() => setTema(!tema)}>
        Mudar tema
      </button>
    </>
  );
}

export default Componente
