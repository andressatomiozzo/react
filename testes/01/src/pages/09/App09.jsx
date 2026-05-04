import React from "react";

const formFields = [
  {
    id: "nome",
    label: "Nome",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
  },
  {
    id: "senha",
    label: "Senha",
    type: "password",
  },
  {
    id: "cep",
    label: "CEP",
    type: "text",
  },
  {
    id: "rua",
    label: "Rua",
    type: "text",
  },
  {
    id: "numero",
    label: "Número",
    type: "text",
  },
  {
    id: "bairro",
    label: "Bairro",
    type: "text",
  },
  {
    id: "cidade",
    label: "Cidade",
    type: "text",
  },
  {
    id: "estado",
    label: "Estado",
    type: "text",
  },
];

const App09 = () => {
  // const [form, setForm] = React.useState({
  //   nome: "",
  //   email: "",
  //   senha: "",
  //   cep: "",
  //   rua: "",
  //   numero: "",
  //   bairro: "",
  //   cidade: "",
  //   estado: "",
  // });

  // Outra forma de fazer:
  const [form, setForm] = React.useState(
    formFields.reduce((acc, field) => {
      console.log(acc);
      return {
        ...acc,
        [field.id]: "",
      };
    }, {}),
  );

  const [resposta, setResposta] = React.useState("");

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const resposta = await fetch("https://ranekapi.origamid.dev/json/api/usuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (!resposta.ok) throw new Error("Ops, algo deu errado!");
      setResposta("Dados enviados");
    } catch (err) {
      console.log(err);
      setResposta("O formulário não foi enviado, verifique se todos os campos estão preenchidos e tente novamente");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="nome">Nome:</label>
        <input type="text" name="nome" id="nome" value={form.nome} onChange={handleChange} />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={form.email} onChange={handleChange} />
        <label htmlFor="senha">Senha:</label>
        <input type="password" name="senha" id="senha" value={form.senha} onChange={handleChange} />
        <label htmlFor="cep">CEP:</label>
        <input type="text" name="cep" id="cep" value={form.cep} onChange={handleChange} />
        <label htmlFor="rua">Rua:</label>
        <input type="text" name="rua" id="rua" value={form.rua} onChange={handleChange} />
        <label htmlFor="numero">Número:</label>
        <input type="text" name="numero" id="numero" value={form.numero} onChange={handleChange} />
        <label htmlFor="bairro">Bairro:</label>
        <input type="text" name="bairro" id="bairro" value={form.bairro} onChange={handleChange} />
        <label htmlFor="cidade">Cidade:</label>
        <input type="text" name="cidade" id="cidade" value={form.cidade} onChange={handleChange} />
        <label htmlFor="estado">Estado:</label>
        <input type="text" name="estado" id="estado" value={form.estado} onChange={handleChange} /> */}
        
        // Outra forma de fazer:
        {formFields.map(({ id, label, type }) => (
          <div key={id}>
            <label htmlFor={id}>{label}</label>
            <input type={type} name={id} id={id} value={form[id]} onChange={handleChange} />
          </div>
        ))}
        <button>Enviar</button>
      </form>
      {resposta && resposta}
    </div>
  );
};

export default App09;
