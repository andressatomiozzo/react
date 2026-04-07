import { useRef, useState } from "react";
import "./home.css";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef();

  const addTask = () => {
    if (inputRef.current.value === "" || inputRef.current.value === " ") {
      console.log("Insira uma tarefa!");
    } else if (!tasks.includes(inputRef.current.value)) {
      setTasks([...tasks, inputRef.current.value]);
      inputRef.current.value = "";
    } else {
      console.log("Ops, esta tarefa já tem no array!");
    }
  };

  const deleteTask = (taskDeleted) => {
    setTasks(tasks.filter((task) => task !== taskDeleted));
  };

  return (
    <div>
      <h1>Lista de tarefas</h1>
      <div className="addTask">
        <input type="text" placeholder="Tarefa..." ref={inputRef} />
        <button onClick={addTask}>Adicionar</button>
      </div>

      {tasks.map((task) => (
        <div key={task} className="task-toDo">
          <p>{task}</p>
          <button onClick={() => deleteTask(task)}>✅</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
