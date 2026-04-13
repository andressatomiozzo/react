import { ChevronRightIcon, TrashIcon } from "lucide-react";
import "./style.css";

interface props {
  tasks: { id: number; title: string; description: string; completed: boolean }[];
  onTaskClick: (taskId: number) => void;
  onTaskDelete: (taskId: number) => void;
}

function Tasks({tasks, onTaskClick, onTaskDelete}: props) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <button onClick={() => onTaskClick(task.id)}>{task.title}</button>
          <button>
            <ChevronRightIcon />
          </button>
          <button onClick={() => onTaskDelete(task.id)}>
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
