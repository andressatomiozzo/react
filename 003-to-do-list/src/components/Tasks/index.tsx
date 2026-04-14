import { ChevronRightIcon, TrashIcon } from "lucide-react";
import "./style.css";

interface props {
  tasks: { id: number; title: string; description: string; completed: boolean }[];
  onTaskClick: (taskId: number) => void;
  onTaskDelete: (taskId: number) => void;
}

function Tasks({ tasks, onTaskClick, onTaskDelete }: props) {
  return (
    <ul className="tasks">
      {tasks.map((task) => (
        <li className="tasks__item" key={task.id}>
          <button className="tasks__item__title" onClick={() => onTaskClick(task.id)}>
            {task.title}
          </button>
          <button className="tasks__item__about">
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
