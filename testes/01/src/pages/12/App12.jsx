import React from "react";
import Input from "../12/form/Input";
import useForm from "./Hooks/useForm";

const App12 = () => {
  const cep = useForm("cep");
  const email = useForm("email");
  const nome = useForm();
  const sobrenome = useForm(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    if (cep.validate() && email.validate() && nome.validate()) {
      console.log("Enviou");
    } else {
      console.log("Não enviou");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Nome" id="nome" type="text" value={nome.value} onChange={nome.onChange} onBlur={nome.onBlur} error={nome.error} />
      <Input label="Sobrenome" id="sobrenome" type="text" value={sobrenome.value} onChange={sobrenome.onChange} onBlur={sobrenome.onBlur} error={sobrenome.error} />
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        value={cep.value}
        onChange={cep.onChange}
        onBlur={cep.onBlur}
        error={cep.error}
      />
      <Input label="Email" id="email" type="text" value={email.value} onChange={email.onChange} onBlur={email.onBlur} error={email.error} />
      <button>Enviar</button>
    </form>
  );
};

export default App12;
