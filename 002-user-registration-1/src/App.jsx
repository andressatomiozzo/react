import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [users, setUsers] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      id: uuidv4(),
      ...form,
    };

    setUsers((prev) => [...prev, newUser]);

    setForm({
      name: "",
      email: "",
      age: "",
    });
  };

  return (
    <div className="app">
      <h1>Cadastro de usuários</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="hidden">
          Nome:
        </label>
        <input type="text" id="name" name="name" placeholder="Nome" required value={form.name} onChange={handleChange} />
        <label htmlFor="email" className="hidden">
          E-mail:
        </label>
        <input type="email" id="email" name="email" placeholder="E-mail" required value={form.email} onChange={handleChange} />
        <label htmlFor="age" className="hidden">
          Idade:
        </label>
        <input type="number" id="age" name="age" placeholder="Idade" required value={form.age} onChange={handleChange} />
        <button type="submit">Cadastrar</button>
      </form>
      <div className="user-list">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
