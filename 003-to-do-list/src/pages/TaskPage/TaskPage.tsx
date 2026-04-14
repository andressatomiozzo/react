import { useSearchParams } from "react-router-dom";
import "./TaskPage.css"
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description")

  const navigate = useNavigate();

  return (
    <div className="description-page">
      <div className="description-page__first-line">
        <button onClick={() => navigate(-1)}><ChevronLeftIcon/></button>
        <h1 className="description-page__title">Detalhes da Tarefa</h1>
      </div>
      <div className="description-page__task">
        <h2 className="description-page__task__title">{title}</h2>
        <p className="description-page__task__description">{description}</p>
      </div>
    </div>
  );
}

export default TaskPage;
