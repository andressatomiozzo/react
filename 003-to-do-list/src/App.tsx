import AddTask from "./components/AddTasks";
import Tasks from "./components/Tasks";
import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1,
      title: "Estudar React",
      description: "Estudar os conceitos básicos de React, como componentes, props e estado.",
      completed: false,
    },
    { id: 2,
      title: "Criar um projeto",
      description: "Criar um projeto simples usando React para praticar os conceitos aprendidos.",
      completed: false,
    },
    { id: 3,
      title: "Aprender sobre hooks",
      description: "Estudar os hooks do React, como useState e useEffect, para gerenciar estado e efeitos colaterais.",
      completed: false,
    },
  ]);
  return (
    <div className="content">
      <h1>Gerenciador de Tarefas</h1>
      <AddTask />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
