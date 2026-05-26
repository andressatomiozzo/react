import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App213 from "./pages/213-Evitando_recriacao_de_funcao/App213";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App213 />
  </StrictMode>,
);
