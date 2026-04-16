import { createRoot } from "react-dom/client";
import App01 from "./pages/01/App01.jsx";
import App02 from "./pages/02/App02.jsx";
import App03 from "./pages/03/App03.jsx";
import "./index.css";


createRoot(document.getElementById("root")).render(
  <>
    {/* <App01 />
    <hr/>
    <App02 />
    <hr/> */}
    <App03/>
  </>,
);
