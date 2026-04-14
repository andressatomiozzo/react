import { useState } from "react";
import "./style.css";

interface props {
  onTaskAdd: (title: string, description: string) => void;
}

function AddTask({ onTaskAdd }: props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="add-task">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="add-task__title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="add-task__description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        className="add-task__button"
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            alert("Preencha o título e a descrição da tarefa");
          }
          onTaskAdd(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
