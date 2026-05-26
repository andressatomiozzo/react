import React from "react";

// 1. Criando o contexto
export const TemaContext = React.createContext();

// 2. Criando o Provider
export const TemaProvider = ({ children }) => {
  const [tema, setTema] = React.useState(true);

  return <TemaContext.Provider value={{ tema, setTema }}>{children}</TemaContext.Provider>;
};
