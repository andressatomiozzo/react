import "./style.css";

function AddTask() {
  return (
    <div className="add-task">
      <input type="text" placeholder="Digite o título da tarefa" className="add-task__title"/>
      <input type="text" placeholder="Digite a descrição da tarefa" className="add-task__description"/>
      <button className="add-task__button">Adicionar</button>
    </div>
  );
}

export default AddTask;
