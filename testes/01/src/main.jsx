import { createRoot } from "react-dom/client";
import App01 from "./pages/App01.jsx";
import App02 from "./pages/App02.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <>
    <App01 />
    <hr/>
    <App02 />
    <hr/>

  </>,
);
