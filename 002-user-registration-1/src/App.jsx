import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import UserCard from './components/UserCard'
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      id: uuidv4(),
      name,
      email,
      age
    }

    setUsers([...users, newUser])

    
  };

  return (
    <div className="app">
      <h1>Cadastro de usuários</h1>


      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="hidden">
          Nome:
        </label>
        <input type="text" id="name" placeholder="Nome" /* required */ value={name} onChange={(event) => setName(event.target.value)} />
        <label htmlFor="email" className="hidden">
          E-mail:
        </label>
        <input type="email" id="email" placeholder="E-mail" /* required */ value={email} onChange={(event) => setEmail(event.target.value)}/>
        <label htmlFor="age" className="hidden">
          Idade:
        </label>
        <input type="number" id="age" placeholder="Idade" /* required */ value={age} onChange={(event) => setAge(event.target.value)}/>
        <button type="sumbit">Cadastrar</button>
      </form>
      <div className="user-list">
        {users.map((user) => (
          <UserCard key={user.id} user={user}/>
        ))}
      </div>
    </div>
  );
}

export default App;
