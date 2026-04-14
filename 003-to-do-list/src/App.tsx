import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTask from "./components/AddTasks";
import Tasks from "./components/Tasks";
import "./App.css";
import Title from "./components/title";

interface tasks {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<tasks[]>(JSON.parse(localStorage.getItem("tasks") ?? "[]") || []);

  function onTaskAdd(title: string, description: string) {
    const newTask = {
      id: uuidv4(),
      title,
      description,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }

      return task;
    });
    setTasks(newTasks);
  }

  function onTaskDelete(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <div className="app">
      <Title>Gerenciador de Tarefas</Title>
      <AddTask onTaskAdd={onTaskAdd} />
      <Tasks tasks={tasks} onTaskClick={onTaskClick} onTaskDelete={onTaskDelete} />
    </div>
  );
}

export default App;
