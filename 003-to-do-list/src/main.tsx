import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App.tsx";
import TaskPage from "./pages/TaskPage/TaskPage.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/task" element={<TaskPage />} />
    </Routes>
  </BrowserRouter>,
);
