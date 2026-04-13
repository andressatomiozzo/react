import "./style.css";

interface props {
  tasks: { id: number; title: string; description: string; completed: boolean }[];
}

function Tasks(props: props) {
  return (
    <ul>
      {props.tasks.map((task) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
}

export default Tasks;
