import React from "react";
import { v4 as uuidv4 } from "uuid";

const App204 = () => {
  const [input, setInput] = React.useState("");
  const [tasks, setTasks] = React.useState([]);
  const [idEdited, setIdEdited] = React.useState(null);

  const haldleChange = (e) => setInput(e.target.value);

  const handleAddClick = () => {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        task: input,
      },
    ]);
    setInput("");
  };

  const handleUpdateClick = () => {
    setTasks([
      ...tasks,
      {
        id: idEdited,
        task: input,
      },
    ]);
    setInput("");
    setIdEdited(null);
  };

  const handleDeleteClick = (id) => setTasks(tasks.filter((t) => t.id !== id));
  
  const handleEditClick = (task) => {
    setInput(task.task);
    setIdEdited(task.id);
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <label htmlFor="task">Digite a sua tarefa:</label>
      <input type="text" id="task" name="task" value={input} onChange={haldleChange} />
      {idEdited ? <button onClick={handleUpdateClick}>Atualizar</button> : <button onClick={handleAddClick}>Adicionar</button>}
      {tasks &&
        tasks.map((t) => (
          <div key={t.id}>
            <span>{t.task}</span>
            <button onClick={() => handleDeleteClick(t.id)}>Excluir</button>
            <button onClick={() => handleEditClick(t)}>Modificar</button>
          </div>
        ))}
    </div>
  );
};

export default App204;
