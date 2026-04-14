import { useSearchParams } from "react-router-dom";
import "./TaskPage.css"
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import Title from "../../components/title";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description")

  const navigate = useNavigate();

  return (
    <div className="description-page">
      <div className="description-page__first-line">
        <button onClick={() => navigate(-1)}><ChevronLeftIcon/></button>
        <Title>Detalhes da Tarefa</Title>
      </div>
      <div className="description-page__task">
        <h2 className="description-page__task__title">{title}</h2>
        <p className="description-page__task__description">{description}</p>
      </div>
    </div>
  );
}

export default TaskPage;
