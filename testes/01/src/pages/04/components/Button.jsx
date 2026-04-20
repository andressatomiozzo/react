import React from "react";

const Button = ({ setCarregando, setDados, children }) => {
  const handleClick = async () => {
    try {
      setCarregando(true)
      const resposta = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${children}`);
      const json = await resposta.json();
      if(!resposta.ok) {
        throw new Error (json)
      }
      setCarregando(false)
      setDados(json)
    } catch (err) {
      console.log(err);
    }
  };

  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
