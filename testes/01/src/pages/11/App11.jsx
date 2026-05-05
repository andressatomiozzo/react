import React from "react";
import Input from "./form/Input";
import Select from "./form/Select";

const App11 = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [produtos, setProdutos] = React.useState("");

  return (
    <form>
      <Input id="nome" label="Nome" value={nome} setValue={setNome} required />
      <Input id="email" label="Email" value={email} setValue={setEmail} />
      <Select options={["notebook", "tablet"]} value={produtos} setValue={setProdutos}/>
      <button>Enviar</button>
    </form>
  );
};

export default App11;
