import AddTask from "./components/AddTasks";
import Tasks from "./components/Tasks";
import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Estudar React", description: "Estudar os conceitos básicos de React, como componentes, props e estado.", completed: false },
    {
      id: 2,
      title: "Criar um projeto",
      description: "Criar um projeto simples usando React para praticar os conceitos aprendidos.",
      completed: false,
    },
    {
      id: 3,
      title: "Aprender sobre hooks",
      description: "Estudar os hooks do React, como useState e useEffect, para gerenciar estado e efeitos colaterais.",
      completed: false,
    },
  ]);

  function onTaskClick(taskId: number) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }

      return task;
    });
    setTasks(newTasks);
  }

  function onTaskDelete(taskId: number) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <div className="content">
      <h1>Gerenciador de Tarefas</h1>
      <AddTask />
      <Tasks tasks={tasks} onTaskClick={onTaskClick} onTaskDelete={onTaskDelete} />
    </div>
  );
}

export default App;
