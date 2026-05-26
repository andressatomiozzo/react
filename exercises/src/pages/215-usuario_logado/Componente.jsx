import React from "react";
import { UserContext } from "./UserContext";

const Componente = () => {
  const { user } = React.useContext(UserContext);

  return <div>{user && <p>Componente: {user}</p>}</div>;
};

export default Componente;
