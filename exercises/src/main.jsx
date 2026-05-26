import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App215 from "./pages/215-usuario_logado/App215";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App215 />
  </StrictMode>,
);
