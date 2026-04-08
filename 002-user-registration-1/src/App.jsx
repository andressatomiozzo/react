// import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <h1>Cadastro de usuários</h1>
      <form action="">
        <label htmlFor="name" className="hidden">
          Nome:
        </label>
        <input type="text" id="name" placeholder="Nome" />
        <label htmlFor="email" className="hidden">
          E-mail:
        </label>
        <input type="email" id="email" placeholder="E-mail" />
        <label htmlFor="age" className="hidden">
          Idade:
        </label>
        <input type="number" id="age" placeholder="Idade" />
        <button type="sumbit">Cadastrar</button>
      </form>
      <div className="user-list">
        <p>usuários cadastrados</p>
      </div>
    </>
  );
}

export default App;
