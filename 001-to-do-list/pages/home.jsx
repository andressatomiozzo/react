import { useRef, useState } from "react";
import "./home.css";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef();

  const addTask = () => {
    if (inputRef.current.value === "" || inputRef.current.value === " ") {
      console.log("Insira um valor válido!");
    } else if (!tasks.includes(inputRef.current.value)) {
      setTasks([...tasks, inputRef.current.value]);
      inputRef.current.value = "";
    } else {
      console.log("Ops, este valor já tem no array!");
    }
  };

  const deleteTask = (taskDeleted) => {
    console.log(taskDeleted);
    setTasks(tasks.filter((task) => task !== taskDeleted));
  };

  return (
    <div>
      <h1>Lista de tarefas</h1>
      <div>
        <input type="text" placeholder="tarefa..." ref={inputRef} />
        <button onClick={addTask}>Adicionar</button>
      </div>

      {tasks.map((task) => (
        <div key={task}>
          <p>{task}</p>
          <button onClick={() => deleteTask(task)}>🗑️</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
