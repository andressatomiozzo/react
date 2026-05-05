import React from "react";
import Input from "./form/Input";
import Select from "./form/Select";
import Radio from "./form/Radio";

const App11 = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [produtos, setProdutos] = React.useState("");
  const [cores, setCores] = React.useState("");
  const [frutas, setFrutas] = React.useState("");

  return (
    <form>
      <h1>Formulário</h1>
      <p>Transformando tipos de inputs em componentes.</p>
      <h2>Tipo Text</h2>
      <Input id="nome" label="Nome" value={nome} setValue={setNome} required />
      <Input id="email" label="Email" value={email} setValue={setEmail} />

      <h2>Tipo Select</h2>
      <Select options={["notebook", "tablet"]} value={produtos} setValue={setProdutos} />

      <h2>Tipo Radio</h2>
      <h3>Cores</h3>
      <Radio options={["azul", "vermelho", "amarelo"]} value={cores} setValue={setCores} />

      <h3>Frutas</h3>
      <Radio options={["laranja", "maçã", "abacaxi"]} value={frutas} setValue={setFrutas} />

      <h2>Tipo Checkbox</h2>

      <button>Enviar</button>
    </form>
  );
};

export default App11;
