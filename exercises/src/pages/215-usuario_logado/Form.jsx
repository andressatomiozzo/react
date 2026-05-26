import React from "react";
import { UserContext } from "./UserContext";

const Form = () => {
  const [input, setInput] = React.useState("");
  const { setUser } = React.useContext(UserContext);

  const handleClick = () => {
    setUser(input);
  };
  return (
    <div>
      <input id="nome" value={input} onChange={({ target }) => setInput(target.value)} />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};

export default Form;
