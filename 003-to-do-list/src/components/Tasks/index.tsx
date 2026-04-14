import { ChevronRightIcon, TrashIcon } from "lucide-react";
import "./style.css";
import { useNavigate } from "react-router-dom";

interface task {
  id: string; title: string; description: string; completed: boolean
}

interface props {
  tasks: task [];
  onTaskClick: (taskId: string) => void;
  onTaskDelete: (taskId: string) => void;
}

function Tasks({ tasks, onTaskClick, onTaskDelete }: props) {
  const navigate = useNavigate();

  function onSeeDetailClick(task: task) {
    navigate(`/task?title=${task.title}&description=${task.description}`)
  }

  return (
    <ul className="tasks">
      {tasks.map((task) => (
        <li className="tasks__item" key={task.id}>
          <button className="tasks__item__title" onClick={() => onTaskClick(task.id)}>
            {task.title}
          </button>
          <button className="tasks__item__about" onClick={() => onSeeDetailClick(task)}>
            <ChevronRightIcon />
          </button>
          <button className="tasks__item__delete" onClick={() => onTaskDelete(task.id)}>
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
